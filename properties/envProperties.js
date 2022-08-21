/**
 * Created by sumeet on 10/05/19.
 */

//var config                = require('config');

exports.isEnv             = isEnv;
exports.getEnv            = getEnv;
exports.isEnvLiveOrBeta   = isEnvLiveOrBeta;
exports.isEnvLive         = isEnvLive;
exports.isServer          = isServer;
exports.getKey            = getKey;


exports.databaseSettings = {
  mysql: {
    master: {
      host    : "localhost",
      user    : "root",
      password: "",
      database: "user",
    }
  }
};


exports.port = 8000;

function isEnv(env) {
  return process.env.NODE_ENV == env;
}

function isEnvLiveOrBeta() {
  return isEnv('live') || isEnv('beta');
}

function isEnvLive() {
  return isEnv('live');
}

function getEnv() {
  return process.env.NODE_ENV;
}

function isServer(server) {
  return process.env.SERVER == server;
}

function getKey(){
  const key = "qwertyuiop";
  return key;
}