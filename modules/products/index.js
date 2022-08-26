const addProduct = require("./addProduct")
const getProduct = require("./getProduct")
const auth = require("./../../middlewares/auth")

app.post('/product/addProduct',auth.authenticateUser,addProduct.addProduct);
app.get('/product/getProduct',getProduct.getProduct);