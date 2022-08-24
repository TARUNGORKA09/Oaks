
const _ = require('underscore');
const commonFunction = require('./../../utilities/commonFunction')



exports.verifyOtp = async(req,res) =>{
    let opts = req.body;
    try {
        let phone_no = opts.phone_no;
        let username = opts.username;
        let otp = opts.otp;
        let response = {
          status : 200,
          message : "Phone no verified successfully"
        }
        let data = await Promise.all([
          commonFunction.fetchDataFromTable({}, "tb_user_otp_details", "", "fetching transaction data", {
            username : username,
            phone_no :phone_no
          })
      ])
      console.log(data[0][0].otp == otp)
      if(data[0][0].otp == otp){
      await commonFunction.updateDataInTable({}, "tb_user_otp_details", "updating logs", {
          isVerified : 1
        }, { username : username});
        return res.send(response)
      }else{
        throw new err
      }
    } catch (error){
      let response = {
        status : 400,
        message : "INVALID PH NUMEBR"
     }
      return res.send(response)
    }
}
