const controller = require("./login")
const auth = require("./../../middlewares/auth")

app.post('/login/userLogin',auth.authenticateUser,controller.userLogin);