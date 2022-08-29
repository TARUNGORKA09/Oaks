
const _ = require('underscore');
const commonFunction = require('./../../utilities/commonFunction')
const moment = require('moment');

exports.addProduct = addProduct
exports.uploadImg = uploadImg

async function addProduct(req,res){
   let opts = req.body.data;
    try {
        let product_type = opts.product_type;
        let product_id = `${opts.product_type}${moment(new Date()).format('YYYYMMDDHHMMSS')}`;
        //let product_img = opts.product_img;
        let product_price = opts.product_price;
        let product_name = opts.product_name;
        let product_description = opts.product_description;
        let product_quantity = opts.product_quantity;
        let product_mrp = opts.product_mrp;
        let product_discount =  opts.product_price/opts.product_mrp * 100;

        let response = {
            status : 200
        }
        console.log(product_id)

        let data = await Promise.all([
            commonFunction.fetchDataFromTable({}, "tb_product_details", "", "fetching transaction data", {
              product_id : product_id
            })
        ])
        console.log(data[0][0])
        if(_.isEmpty(data[0][0])){
            await commonFunction.insertIntoTable({}, "tb_product_details", "inserting product table", {
                product_id,
                //product_img : phone_no,
                product_type,
                product_price,
                product_name,
                product_description,
                product_quantity,
                product_mrp,
                product_discount
                });
        }else{
            throw new Error("product already present !!!")
        }
        response.message = "Product added successfully !!"
        response.data = {
            product_id,
            //product_img : phone_no,
            product_type,
            product_price,
            product_name,
            product_description,
            product_quantity,
            product_mrp,
            product_discount
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


async function uploadImg(req, res){
    if (!req.file) {
        console.log("No file upload");
    } else {
        console.log(req.file.filename)
        var imgsrc = `http://${process.env.LOCALHOST}:${process.env.PORT}/images/` + req.file.filename
        var insertData = `UPDATE tb_product_details SET product_img = ? WHERE product_id = "${req.body.product_id}"`
        connection.query(insertData, [imgsrc], (err, result) => {
            if (err) throw err
            console.log("file uploaded")
        })

    let response = {
        status : 200,
        message : "product image added successfully"
    }
    }
    return res.send(response)
}