
const dotenv = require('dotenv');
dotenv.config();
const express = require('express')

//require('./libs/raven');

var app                           = express();
global.app                        = app;

app.use("/images",express.static("public/images"))
app.use("/payment",express.static("public/html"))

require('./middlewares');
require("./modules")
require('./services/startupService').initializeServer();
