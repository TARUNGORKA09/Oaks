const login = require("./login")
const sendotp = require("./sendOTP")
const verifyOtp = require("./verifyOtp")
const auth = require("./../../middlewares/auth")

app.post('/login/userLogin',auth.authenticateUser,login.userLogin);
app.post('/user/sendOtp',sendotp.sendOTP);
app.post('/user/verifyOtp',verifyOtp.verifyOtp);
app.get('/ping',login.ping);