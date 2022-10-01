const razorpay = require('./razorpay')

app.post("/payment/getRedirectUrl",razorpay.getRedirectUrl)
app.get("/payment/getTransactionDetails",razorpay.getTransactionDetails)
app.post("/payment/getOrderId",razorpay.getOrderId)
app.get("/payment/getKeys",razorpay.getRazorpaykeys);