const razorpay = require('./razorpay')

app.post("/payment/getRedirectUrl",razorpay.getRedirectUrl)
app.get("/payment/getTransactionDetails",razorpay.getTransactionDetails)