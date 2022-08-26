
const _ = require('underscore');
const commonFunction = require('./../../utilities/commonFunction')
exports.getProduct = getProduct

async function getProduct(req,res){
    let opts = req.query;
    try {
        let response = {
            status : 200
        }
        console.log(opts.type)
        let data = await Promise.all([
            commonFunction.fetchDataFromTable({}, "tb_product_details", "", "fetching transaction data", {
              product_type: opts.type
            })
        ])
        if(!_.isEmpty(data[0])){
            response.message = "Product added successfully !!"
            response.data = data[0];
        }else{
            throw new error("pant type not found !!!")
        }
        return res.send(response)
    } catch (error) {
        let response = {
            status : 400,
            message : error.message
        }
        return res.send(response)
    }
}