

const _ = require('underscore');
const commonFunction = require('./../../utilities/commonFunction')

exports.userLogin= async(req,res) => {
    const opts = req.body
    try{
        let response = {
            status : 200,
            data : {
                username : opts.username
            }
        }
        let password = opts.password;
        let username = opts.username;
        let data = await Promise.all([
            commonFunction.fetchDataFromTable({}, "tb_user_details", "", "fetching transaction data", {
              username : username
            })
        ])
        opts.data = data[0];
            if(data[0][0].username == username && data[0][0].password == password){
                response.message = "User logged in successfully";
                return res.send(response)
            }else{
                response.status = 404
                response.message = "Invalid Login Credentials"
                return res.send(response)
            }
    }catch(error){
    console.log(error)
    }
}

exports.ping  = async(req,res) => {
    console.log("REQUEST RECEIVED")
    return res.send({status : 200});
}