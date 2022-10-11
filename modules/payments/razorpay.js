const _ = require("underscore")
const commonFunction = require('./../../utilities/commonFunction')
const moment = require('moment');
const cartDetails = require('../Cart/getCartDetails')

const httpService = require('../../services/httpService');


exports.getRedirectUrl = getRedirectUrl
exports.getTransactionDetails = getTransactionDetails
exports.getOrderId = getOrderId
exports.getRazorpaykeys = getRazorpaykeys

async function getRazorpaykeys(req,res){
    try {
        let time = moment(new Date()).format('YYYYMMDDHHMMSS')
        let order_no = `ORDER_${time}`
        let key_id =  process.env.RAZORPAY_KEY_ID;
        let key_secret =  process.env.RAZORPAY_KEY_ID;
        let callbackUrl = `http://${process.env.LOCALHOST}:${process.env.PORT}/payment/getTransactionDetails?order_id=${order_no}&username=${username}`
        let response = {
            status : 200,
            key_id,
            key_secret,
            callbackUrl,
            order_no
        }

        res.send(response)
    } catch (error) {
        let response = {
            status : 400,
            payment_url : null,
            message : "Oops!!! Something went wrong"
          }
          return res.send(response)
    }
}

async function getOrderId(req,res){
    let opts = req.body
    try {
        let amount = opts.amount;
        let string = process.env.RAZORPAY_KEY_ID + ":" + process.env.RAZORPAY_KEY_SECRET
        let token = Buffer.from(string).toString("base64");

        let time = moment(new Date()).format('YYYYMMDDHHMMSS')
        let body = {
            "amount" : amount,
            "currency" : "INR",
            "receipt" : `ORDER_${time}`
        }
        let options = {
            uri : "https://api.razorpay.com/v1/orders",
            method : "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Basic ${token}`,
              },
            body :JSON.stringify(body)
        };
        let razorpayResponse = await httpService.sendHttpRequest({}, options);
        console.log(razorpayResponse)
        try{razorpayResponse = JSON.parse(razorpayResponse)}catch(e){}
        let response = {
            status : 200,
            order_id : razorpayResponse.id
          }
          return res.send(response)

    }catch(e){
        let response = {
            status : 400,
            payment_url : null,
            message : "Oops!!! Something went wrong"
          }
          return res.send(response)
    }
}

async function getRedirectUrl(req,res){
        let opts = req.body
        try {
            let amount = opts.amount;
            let username = opts.username;
            let time = moment(new Date()).format('YYYYMMDDHHMMSS')
            let order_no = `ORDER_${time}`
            //let description = `payment for order No. ${order_no}`
            let string = process.env.RAZORPAY_KEY_ID + ":" + process.env.RAZORPAY_KEY_SECRET
            let token = Buffer.from(string).toString("base64");
            let refData = await commonFunction.fetchDataFromTable({},"tb_user_details","","Fetching data from user details",{
                username
            })
            let body = {
                "amount": amount*100,
                "currency": "INR",
                "description": `Payment for ${order_no}`,
                "customer": {
                  "name": `${refData[0].first_name} ${refData[0].last_name}`,
                  "contact": refData[0].phone_no,
                  "email": refData[0].email
                },
                "notify": {
                  "sms": true,
                  "email": true
                },
                "reminder_enable": true,
                "callback_url": `http://${process.env.LOCALHOST}:${process.env.PORT}/payment/getTransactionDetails?order_id=${order_no}&username=${username}`,
                "callback_method": "get"
              }
            let options = {
                uri: `https://api.razorpay.com/v1/payment_links`,
                method: 'POST',
                body: body,
                json: true,
                timeout: 50000,
                rejectUnauthorized: false,
                headers: {
                  'Content-Type': 'application/json',
                  "Authorization": `Basic ${token}`,
                }
              };
              let razorpayResponse = await httpService.sendHttpRequest({}, options);
              console.log(razorpayResponse)
              try{razorpayResponse = JSON.parse(razorpayResponse)}catch(e){}
              let url = razorpayResponse.short_url;
              let response = {
                status : 200,
                payment_url : url
              }
              await commonFunction.insertIntoTable({},"tb_payment_details","updating order table",{
                order_id : order_no,
                username,
                razorpay_payment_link_id : razorpayResponse.id,
                razorpay_payment_link : razorpayResponse.short_url,
                email : refData[0].email,
                phone_no : refData[0].phone_no,
                isPaymentDone : 0,
                amount
              })
              return res.send(response) 
        } catch (error) {
            let response = {
                status : 400,
                payment_url : null,
                message : "Oops!!! Something went wrong"
              }
              return res.send(response)
        }
}


async function getTransactionDetails(req,res){
    let opts = req.query;
    console.log(opts)
    console.log(req.body)
    try {
        let transactionId = opts.razorpay_payment_id;
        let order_id = opts.order_id;
        let username = opts.username;
        let status = opts.razorpay_payment_link_status;
       

        if(status == "paid"){
            await commonFunction.updateDataInTable({},"tb_payment_details","updating order details",{
                transaction_Id : transactionId,
                isPaymentDone : 1
            },{
                order_id
            })

            let orderData = await 
                commonFunction.fetchDataFromTable({}, "tb_payment_details", "", "fetching transaction data", {
                  order_id,
                })
            let order_time = orderData.created_at;
            

            let data = await Promise.all([
                commonFunction.fetchDataFromTable({}, "tb_cart_details", "", "fetching transaction data", {
                  username,
                  isActive:1
                })
            ])
            if(!_.isEmpty(data[0])){
                for (let i = 0; i < data[0].length; i++) {
                    let refData = await cartDetails.getProductDetails(data[0][i].product_id);
                    await commonFunction.insertIntoTable({}, "tb_order_details", "inserting product table", {
                        order_id,
                        username,
                        order_time,
                        product_id : refData.product_id,
                        product_type : refData.product_type,
                        product_price :refData.product_price,
                        product_name : refData.product_name,
                        product_description : refData.product_description,
                        product_quantity : refData.product_quantity,
                        product_mrp : refData.product_mrp,
                        product_discount : refData.product_discount
                  })
            }
        }
        }
        else
        {
            await commonFunction.updateDataInTable({},"tb_payment_details","updating order details",{
                transaction_Id : transactionId,
                isPaymentDone : 0
            },{
                order_id
            })
            return res.send(400)
        }
        return res.send(200)
    } catch (error) {
        res.send(400)
    }
}