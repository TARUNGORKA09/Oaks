/**
 * Created by sumeet on 10/05/19.
 */


var raven                   = require('raven');


raven.config(config.get('sentry.url') + config.get('sentry.project'), config.get('sentry.options')).install(
  function (err, sendErr, eventId) {
    if (!sendErr) {
      console.error('Successfully sent fatal error with eventId ' + eventId + ' to Sentry:', err.stack);
    }
});
