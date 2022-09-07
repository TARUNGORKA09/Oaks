
const _ = require('underscore');
const commonFunction = require('./../../utilities/commonFunction')

exports.getCartDetails = getCartDetails
exports.getProductDetails = getProductDetails

async function getCartDetails(req,res){
   let opts = req.body;
    try {
        let username = opts.username;
        let response = {
            status : 200
        }
        let data = await Promise.all([
            commonFunction.fetchDataFromTable({}, "tb_cart_details", "", "fetching transaction data", {
              username,
              isActive:1
            })
        ])
        if(!_.isEmpty(data[0])){
            let totalCartValue = 0
            let count = 0
            for (let i = 0; i < data[0].length; i++) {
                let refData = await getProductDetails(data[0][i].product_id);
                data[0][i].product_img = refData.product_img;
                data[0][i].product_type = refData.product_type;
                data[0][i].product_name = refData.product_name;
                data[0][i].product_mrp = refData.product_mrp;
                data[0][i].product_discount = refData.product_discount;
                data[0][i].product_img = refData.product_img;
                data[0][i].product_stock = refData.product_quantity
                totalCartValue = totalCartValue + data[0][i].product_price * data[0][i].product_quantity
                count+=1
              } 
            response.totalNoOfProductsInCart = count
            response.totalCartValue = totalCartValue
        }else{
        throw new Error("Sorry!! the cart is empty !!")
        }
        response.data = data[0]
        return res.send(response)
    } catch(error) {
        let response = {
            status : 400,
            message : error.message
        }
        return res.send(response)
    }
}

async function getProductDetails(product_id){
    let data = await Promise.all([
        commonFunction.fetchDataFromTable({}, "tb_product_details", "", "fetching transaction data", {
          product_id
        })
    ])
    return data[0][0]
}