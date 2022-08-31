const razorpay = require('./razorpay')

app.post("/payment/getRedirectUrl",razorpay.getRedirectUrl)
app.post("/payment/getTransactionDetails",razorpay.getRedirectUrl)