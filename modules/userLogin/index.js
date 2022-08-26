const login = require("./verifyPhoneNumber")
const sendotp = require("./sendOTP")
const verifyOtp = require("./verifyOtp")
const signUp = require("./signup")
const auth = require("./../../middlewares/auth")

app.post('/login/userLogin',auth.authenticateUser,login.userLogin);
app.post('/user/sendOtp',sendotp.sendOTP);
app.post('/user/verifyOtp',verifyOtp.verifyOtp);
app.post('/user/signUp',signUp.userSignUp);
app.get('/ping',login.ping);
app.post('/user/getUserDetails',login.getUserDetails)