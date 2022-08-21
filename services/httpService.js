const http        = require('http');
const request     = require('request').defaults({strictSSL : false});
const logging     = require('../logging/logging')
exports.startHttpServer = startHttpServer;
exports.sendHttpRequest                         = sendHttpRequest;

function startHttpServer(port) {
  return new Promise((resolve, reject) => {
    var server = http.createServer(app).listen(port, function () {
      console.error("###################### Express connected ##################", app.get('port'), app.get('env'));
      resolve(server);
    });
  });
}


function sendHttpRequest(apiReference, options) {
  return new Promise((resolve, reject) => {
    options.gzip = true;
    request(options, (error, response, body) => {
      
      if (error) {
        logging.logError(apiReference, {
            EVENT : 'Error from external server', OPTIONS : options, ERROR: error,
            RESPONSE : response, BODY: body
          }
        );
        return reject(error);
      }
      if (response == undefined) {
        error = new Error('No response from external server');
        return reject(error);
      }
      if (response.statusCode < '200' || response.statusCode > '299') {
        error      = new Error('Couldn\'t request with external server ');
        error.code = response.statusCode;
        error.body = response.body;
        logging.logError(apiReference, {
            EVENT : 'Error from external server', OPTIONS : options, ERROR: error,
            RESPONSE : response, BODY : body
          }
        );
        return reject(error);
      }
      logging.log(apiReference, {
          EVENT : 'Response from external server', OPTIONS: options, ERROR: error,
          RESPONSE : response, BODY : body
        }
      );
      return resolve(body);
    });
  });
}