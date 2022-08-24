
const _ = require('underscore');
const commonFunction = require('./../../utilities/commonFunction')
const accountSid = "AC8411f1416a922eb3de7805c2b3acc6a3";
const authToken = "d5a2704858b3d01f87904cc2f7671de2";
const client = require('twilio')(accountSid, authToken);


exports.sendOTP = async(req,res) =>{
    let opts = req.body;
    try {
        let phone_no = opts.phone_no;
        let username = opts.username;
        let data = await Promise.all([
            commonFunction.fetchDataFromTable({}, "tb_user_details", "", "fetching transaction data", {
              username : username
            })
        ])
        if(data[0][0].username == username){
            response.message = "User already present ";
            return res.send(response)
        }
        let otp = Math.floor((Math.random()*1000000)+1);
        client.messages
        .create({
        body: `Welcome to Oaks !! your OTP for login is : ${otp}`,
        from: '+16073648916',
        to: phone_no
        })
            .then(message => console.log(message.sid));
        await commonFunction.insertIntoTable({}, "tb_user_otp_details", "inserting logs table", {
            username: username,
            phone_no : phone_no,
            otp : otp,
            isVerified : 0
            });
            let response = {
                status : 200,
                message : "OTP sent successfully!!!"
            }
            return res.send(response)
    } catch (error) {
        let response = {
            status : 400,
            message : "INVALID PH NUMEBR"
        }
        return res.send(response)
    }
}
