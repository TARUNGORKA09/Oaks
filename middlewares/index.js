/**
 * Created by sumeet on 05/10/19.
 */

const bodyParser   = require('body-parser');
const logger       = require('morgan');
const errorhandler = require('errorhandler');
const cors         = require('cors');

// //const utilityService = require('./../properties/envProperties');
const requestLogger  = require('./../logging/request_logs');

// if (utilityService.isEnvLiveOrBeta()) {
//   require('./../libs/newrelic');
// }

app.set('port', process.env.PORT);
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(function (error, req, res, next) {
  if (error instanceof SyntaxError) {
    return res.sendStatus(400);
  }
  next();
});
app.use(logger('dev'));
app.use(cors());
app.use(requestLogger.create());

if ('development' == process.env.NODE_ENV) {
  app.use(errorhandler());
}
console.log("App Environment Running at: ", process.env.NODE_ENV);