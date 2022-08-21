var moment = require('moment');
var envProperties = require('./../properties/envProperties');

exports.log = log;
exports.logError = logError;
var debugging_enabled = true;

if (envProperties.isEnvLive()) {
  debugging_enabled = false;
}
function log(apiReference, log) {
  if (debugging_enabled
    && apiReference
    ) {
    try {
      log = JSON.stringify(log);
    }
    catch (exception) {
    }
    console.log("-->" + moment(new Date()).format('YYYY-MM-DD hh:mm:ss.SSS') + " :----: " +
      apiReference.module + " :=: " + apiReference.api + " :=: " + log);
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
