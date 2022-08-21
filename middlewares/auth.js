
const auth = require("./../properties/envProperties");


exports.authenticateUser = authenticateUser

async function authenticateUser(req, res, next) {
  let key = auth.getKey();
  try {
    let response    = { status: 400, data: {} }
    console.log(req.body)
    let secret_key  = req.body.secret_key
    if (key == secret_key) {
      return next()
    }
    response.message = "INVALID SECRET KEY"
    return res.send(response)
  } catch (error) {
    console.log(error)
    response.message = "SOMETHING WENT WRONG"
    return res.send(response)
  }
}