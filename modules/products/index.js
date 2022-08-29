const addProduct = require("./addProduct")
const getProduct = require("./getProduct")
const auth = require("./../../middlewares/auth")

app.post('/product/addProduct',auth.authenticateUser,addProduct.addProduct);
app.get('/product/getProduct',getProduct.getProduct);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const multer = require('multer')
const path = require('path')

var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'public/images')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({
    storage: storage
});
app.post("/post", upload.single('image'),addProduct.uploadImg);


