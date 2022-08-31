
const _ = require('underscore');
const commonFunction = require('./../../utilities/commonFunction')

exports.removeFromCart = removeFromCart

async function removeFromCart(req,res){
   let opts = req.body;
    try {
        let username = opts.username;
        let product_id = opts.product_id;
        let response = {
            status : 200
        }
        let data = await Promise.all([
            commonFunction.fetchDataFromTable({}, "tb_cart_details", "", "fetching transaction data", {
              product_id,
              username
            })
        ])
        if(!_.isEmpty(data[0][0])){
            product_quantity = data[0][0].product_quantity
            await commonFunction.updateDataInTable({},"tb_cart_details","updating cart details",{
                product_quantity: product_quantity - 1,
            },{
                username,
                product_id
            })
        }else{
            await commonFunction.updateDataInTable({},"tb_cart_details","updating cart details",{
                isActive : 0
            },{
                username,
                product_id
            })
        }
        response.message = "product removed successfully"
        return res.send(response)
    } catch(error) {
        let response = {
            status : 400,
            message : error.message
        }
        return res.send(response)
    }
}