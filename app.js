//require('./libs/raven');

var app                           = require('express')();
global.app                        = app;

require('./middlewares');
require("./modules")
require('./services/startupService').initializeServer();
