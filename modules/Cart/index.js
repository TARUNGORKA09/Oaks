const addToCart = require("./addToCart");
const getCartDetails = require("./getCartDetails");
const removeFromCart = require("./removeFromCart")


app.post('/cart/addProduct',addToCart.addProduct);
app.post('/cart/getCartDetails',getCartDetails.getCartDetails);
app.post('/cart/removeFromCart',removeFromCart.removeFromCart);