
const _ = require('underscore');
const commonFunction = require('./../../utilities/commonFunction')
const moment = require('moment');

exports.addProduct = addProduct
exports.getProductDetails = getProductDetails

async function addProduct(req,res){
   let opts = req.body;
    try {
        let product_id = opts.product_id;
        let username = opts.username;

        let productDetail = await getProductDetails(product_id)

        let response = {
            status : 200
        }
        let data = await Promise.all([
            commonFunction.fetchDataFromTable({}, "tb_cart_details", "", "fetching transaction data", {
              product_id,
              username
            })
        ])
        console.log(data)
        if(!_.isEmpty(data[0][0])){
            let product_quantity = data[0][0].product_quantity 
            await commonFunction.updateDataInTable({}, "tb_cart_details", "inserting cart table", {
                product_quantity: product_quantity + 1,
                isActive : 1
            },{
                username,
                product_id, 
            });
        }else{
        await commonFunction.insertIntoTable({}, "tb_cart_details", "inserting cart table", {
            username,
            product_id,
            product_price : productDetail.product_price,
            product_quantity : 1,
            isActive : 1
        });
    }
        response.message = "Product added successfully !!"
        response.data = {
            product_id,
            username
        }
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