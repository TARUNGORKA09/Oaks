var moment = require('moment');

exports.log = log;
exports.logError = logError;
var debugging_enabled = true;

debugging_enabled = true;
function log(log) {
  if (debugging_enabled) {
    try {
      log = JSON.stringify(log);
    }
    catch (exception) {
    }
    console.log("-->" + moment(new Date()).format('YYYY-MM-DD hh:mm:ss.SSS') + " :----: ");
    console.log();
  }
}
function logError(apiReference, log) {
 {

    try {
      log = JSON.stringify(log);
    }
    catch (exception) {
    }
    console.error("-->" + apiReference.module + " :=: " + apiReference.api + " :=: " + log);
  }
}
