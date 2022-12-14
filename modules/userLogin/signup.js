

const _ = require('underscore');
const commonFunction = require('./../../utilities/commonFunction')

exports.userSignUp= async(req,res) => {
    const opts = req.body
    try{
        let response = {
            status : 200,
            data : {
                username : opts.phone_no
            }
        }
        let username = opts.phone_no;
        let data = await Promise.all([
            commonFunction.fetchDataFromTable({}, "tb_user_details", "", "fetching transaction data", {
              username : username
            })
        ])
        opts.data = data[0];
        if(_.isEmpty(opts.data)){
            await commonFunction.insertIntoTable({}, "tb_user_details", "inserting logs table", {
                username: username,
                first_name : opts.first_name,
                last_name : opts.last_name,
                phone_no : opts.phone_no,
                email : opts.email,
                isActive : 1
              });
        }else{
            if(data[0][0].username == username){
                response.message = "User already present ";
                return res.send(response)
            }
        }
        response.message = "User added successfully"
        return res.send(response)
    }catch(error){
    console.log(error)
    }
}

exports.ping  = async(req,res) => {
    console.log("REQUEST RECEIVED")
    return res.send({status : 200});
}