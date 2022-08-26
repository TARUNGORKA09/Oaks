const addToCart = require("./addToCart");
const getCartDetails = require("./getCartDetails");
app.post('/cart/addProduct',addToCart.addProduct);
app.post('/cart/getCartDetails',getCartDetails.getCartDetails)