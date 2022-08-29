
const _ = require('underscore');
const commonFunction = require('./../../utilities/commonFunction')
const accountSid = process.env.SMS_ACC_ID;
const authToken = process.env.SMS_AUTH_TOKEN;
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
        // TODO need to check if phone number already exist or not.
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
