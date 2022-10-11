
const _ = require('underscore');
const commonFunction = require('./../../utilities/commonFunction')
exports.getOrderDetails = getOrderDetails

async function getOrderDetails(req,res){
    let opts = req.body;
    try {
        let response = {
            status : 200
        }
        let data = await Promise.all([
            commonFunction.fetchDataFromTable({}, "tb_order_details", "", "fetching transaction data", {
              username : opts.username
            })
        ])
        if(!_.isEmpty(data[0])){
            response.data = data[0];
        }else{
            throw new error("order order not found !!!")
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