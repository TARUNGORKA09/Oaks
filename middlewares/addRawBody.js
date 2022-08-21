module.exports = function addRawBody() {
  return function (req, res, next) {
    if (req.url != '/stripe/webhook') {
      return next();
    }
    req.setEncoding('utf8');
    var data = '';
    req.on('data', function (chunk) {
      data += chunk;
    });
    req.on('end', function () {
      req.rawBody = data;
      next();
    });
  };
};