

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
       if(!_.isEmpty(opts.data)){
        if(data[0][0].username == username && data[0][0].password == password){
            response.message = "User logged in successfully";
            return res.send(response)
        }else{
            response.status = 404
            response.message = "Invalid Login Credentials"
            return res.send(response)
        }
       }else{
        response.status = 404
            response.message = "user not registered"
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


exports.getUserDetails = async(req,res) =>{
    let opts = req.body;

    try{
        let username = opts.username;
        let data = await Promise.all([
            commonFunction.fetchDataFromTable({}, "tb_user_details", "", "fetching transaction data", {
              username : username
            })
        ]);
        let refData = data[0][0];
        if(!_.isEmpty(refData)){
            let response = {    
                status : 200,
                data :{
                    username,
                first_name : refData.first_name,
                last_name : refData.last_name,
                phone_no : refData.phone_no,
                email : refData.email
                }
            }
        return res.send(response)
        }else{
            throw new error;
        }
    }catch(err){
        let response = {
            status : 400,
            Message : "User Not found!!"
        }
        return res.send(response)
    }
}