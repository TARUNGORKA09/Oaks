/**
 * Created by sumeet on 10/05/19.
 */

const MD5 = require('MD5');
const moment = require('moment');
const constants = require('./../properties/constants');
const convertToBase64 = function (str) { return new Buffer(str).toString('base64'); }
const CryptoJS = require('crypto-js');

exports.create_UUID = create_UUID;
exports.getCardBrand = getCardBrand;
exports.generateAccessToken = generateAccessToken;
exports.generateRandomStringAndNumbers = generateRandomStringAndNumbers;
exports.getBasicAuthToken = getBasicAuthToken;
exports.decryptSHA256 = decryptSHA256;
exports.convertParamsToJSON = convertParamsToJSON;
exports.attachParamsToUrl = attachParamsToUrl;

function generateAccessToken(input, userID) {
  var string = '';
  var string2 = '';
  if (userID) {
    string = userID + ".";
  }
  if (input) {
    string2 += input;
  }
  string2 += generateRandomStringAndNumbers() + new Date().getTime();
  string = MD5(string2);
  return string;
}
function generateRandomStringAndNumbers() {
  let text = "";
  let possible = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 8; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  const date = moment(new Date()).valueOf();
  return text + date;
}
function getCardBrand(cardNumber) {
  try {
    const cardArray = constants.CARDS;
    let brandName = "";
    for (let i = 0; i < cardArray.length; i++) {
      if (cardArray[i].pattern.test(cardNumber)) {
        brandName = cardArray[i].type;
        break;
      }
    }
    return brandName;
  } catch (err) {
    return false;
  }
}
function create_UUID() {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}
function getBasicAuthToken(username, password) {
  return convertToBase64(`${username}:${password}`);
}
function decryptSHA256(encrypted_string, privateKey) {
  return CryptoJS.AES.decrypt(encrypted_string, privateKey).toString(CryptoJS.enc.Utf8);
}
function convertParamsToJSON(str) {
  let arr = str.split("&")
  let result = {};
  for(let i=0; i< arr.length; i++) {
    let key = arr[i].split("=")[0]
    let value = arr[i].split("=")[1]
    result[key] = value;
  }
  return result;
}
function attachParamsToUrl(apiReference, params, url) {
  url = url + "?";
  let count = 0;
  for (var key in params) {
    if (params.hasOwnProperty(key) && params[key] != null && params[key] != undefined) {
      if (!count) {
        url += key + "=" + encodeURIComponent(params[key]);
        count = 1;
      }
      else {
        url += "&" + key + "=" + encodeURIComponent(params[key]);
      }
    }
  }

  return url;
}