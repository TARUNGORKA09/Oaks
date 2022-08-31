const _ = require("underscore")
const commonFunction = require('./../../utilities/commonFunction')
const moment = require('moment');

const httpService = require('../../services/httpService');
const { json } = require("body-parser");


exports.getRedirectUrl = getRedirectUrl
exports.getTransactionDetails = getTransactionDetails

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
                "reference_id": order_no,
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
                "callback_url": `http://${process.env.LOCALHOST}:${process.env.PORT}/payment/getTransactionDetails?order_id=${order_no}`,
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
              try{razorpayResponse = JSON.parse(razorpayResponse)}catch(e){}
              let url = razorpayResponse.short_url;
              let response = {
                status : 200,
                payment_url : url
              }
              await commonFunction.insertIntoTable({},"tb_order_details","updating order table",{
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
        
    } catch (error) {
        
    }
}