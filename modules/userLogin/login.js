

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
        console.log("^#########################",data)
        opts.data = data[0];
        console.log("^^^^^^^^^^^^^^^^^^^^^^^",opts.data)
        if(_.isEmpty(opts.data)){
            await commonFunction.insertIntoTable({}, "tb_user_details", "inserting logs table", {
                username: opts.username,
                password : opts.password,
                isActive : 1
              });
        }else{
            if(data[0][0].username == username && data[0][0].password == password){
                response.message = "User logged in successfully";
                return res.send(response)
            }else{
                response.status = 404
                response.message = "Invalid Login Credentials"
                return res.send(response)
            }
        }
        response.message = "User added successfully"
        return res.send(response)
    }catch(error){
    console.log(error)
    }
}