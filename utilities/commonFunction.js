/**
 * Author : Shubham Singh Negi
 */

const dbHandler = require('../database/mysqllib');
const request = require('request')
exports.insertIntoTable = (apiReference, tableName, event, insertObj) => {
  return new Promise(async (resolve, reject) => {
    let sql = `INSERT INTO ${tableName} SET ? `;
    try {
      const insertData = await dbHandler.executeQuery(apiReference, event, sql, [insertObj]);
      resolve(insertData);
    } catch (err) {
      reject(err);
    }
  })
};

exports.fetchDataFromTable = (apiReference, tableName, selectItems, event, criteria, order, limit, offset) => {
  return new Promise(async (resolve, reject) => {

    if (!selectItems) {
      selectItems = "*";
    }
    var stmt = `SELECT ${selectItems} FROM ${tableName} WHERE `;
    var args = [];

    if (criteria.hasOwnProperty('id')) {
      stmt += " id = ? AND ";
      args.push(criteria["id"]);
    }
    if (criteria.hasOwnProperty('offering_id')) {
      stmt += " offering_id = ? AND ";
      args.push(criteria["offering_id"]);
    }
    if (criteria.hasOwnProperty('is_active')) {
      stmt += " is_active = ? AND ";
      args.push(criteria["is_active"]);
    }
    if (criteria.hasOwnProperty('card_type')) {
      stmt += " card_type = ? AND ";
      args.push(criteria["card_type"]);
    }
    if (criteria.hasOwnProperty('card_last_four')) {
      stmt += " card_last_four = ? AND ";
      args.push(criteria["card_last_four"]);
    }
    if (criteria.hasOwnProperty('card_exp')) {
      stmt += " card_exp = ? AND ";
      args.push(criteria["card_exp"]);
    }
    if (criteria.hasOwnProperty('api_key')) {
      stmt += " api_key = ? AND ";
      args.push(criteria["api_key"]);
    }
    if (criteria.hasOwnProperty('form_id')) {
      stmt += " form_id = ? AND ";
      args.push(criteria["form_id"]);
    }
    if (criteria.hasOwnProperty('store_id')) {
      stmt += " store_id = ? AND ";
      args.push(criteria["store_id"]);
    }
    if (criteria.hasOwnProperty('transaction_id')) {
      stmt += " transaction_id = ? AND ";
      args.push(criteria["transaction_id"]);
    }
    if (criteria.hasOwnProperty('username')) {
      stmt += " username = ? AND ";
      args.push(criteria["username"]);
    }
    if (criteria.hasOwnProperty('password')) {
      stmt += " password = ? AND ";
      args.push(criteria["password"]);
    }
    if (criteria.hasOwnProperty('key_id')) {
      stmt += " key_id = ? AND ";
      args.push(criteria["key_id"]);
    }
    if (criteria.hasOwnProperty('card_exp_year')) {
      stmt += " card_exp_year = ? AND ";
      args.push(criteria["card_exp_year"]);
    }
    if (criteria.hasOwnProperty('card_num')) {
      stmt += " card_num = ? AND ";
      args.push(criteria["card_num"]);
    }
    if (criteria.hasOwnProperty('card_exp_mon')) {
      stmt += " card_exp_mon = ? AND ";
      args.push(criteria["card_exp_mon"]);
    }
    if (criteria.hasOwnProperty('publishableKey')) {
      stmt += " publishableKey = ? AND ";
      args.push(criteria["publishableKey"]);
    }
    if (criteria.hasOwnProperty('payment_method_id')) {
      stmt += " payment_method_id = ? AND ";
      args.push(criteria["payment_method_id"]);
    }
    if (criteria.hasOwnProperty('product_customer_id')) {
      stmt += " product_customer_id = ? AND ";
      args.push(criteria["product_customer_id"]);
    }
    if (criteria.hasOwnProperty('reference_id')) {
      stmt += " reference_id = ? AND ";
      args.push(criteria["reference_id"]);
    }
    if (criteria.hasOwnProperty('order_code')) {
      stmt += " order_code = ? AND ";
      args.push(criteria["order_code"]);
    }
    if (criteria.hasOwnProperty('session_indicator')) {
      stmt += " session_indicator = ? AND ";
      args.push(criteria["session_indicator"]);
    }
    if (criteria.hasOwnProperty('card_token')) {
      stmt += " card_token = ? AND ";
      args.push(criteria["card_token"]);
    }
    if (criteria.hasOwnProperty('vendor_id')) {
      stmt += " vendor_id = ? AND ";
      args.push(criteria["vendor_id"]);
    }
    if (criteria.hasOwnProperty('number')) {
      stmt += " number = ? AND ";
      args.push(criteria["number"]);
    }
    if (criteria.hasOwnProperty('card_id')) {
      stmt += " card_id = ? AND ";
      args.push(criteria["card_id"]);
    }
    if (criteria.hasOwnProperty('customer_id')) {
      stmt += " customer_id = ? AND ";
      args.push(criteria["customer_id"]);
    }
    if (criteria.hasOwnProperty('vendor_email')) {
      stmt += " vendor_email = ? AND ";
      args.push(criteria["vendor_email"]);
    }
    if (criteria.hasOwnProperty('card_number')) {
      stmt += " card_number = ? AND ";
      args.push(criteria["card_number"]);
    }
    if (criteria.hasOwnProperty('invoice_id')) {
      stmt += " invoice_id = ? AND ";
      args.push(criteria["invoice_id"]);
    }
    if (criteria.hasOwnProperty('link_id')) {
      stmt += " link_id = ? AND ";
      args.push(criteria["link_id"]);
    }
    if (criteria.hasOwnProperty('merchant_id')) {
      stmt += " merchant_id = ? AND ";
      args.push(criteria["merchant_id"]);
    }
    if (criteria.hasOwnProperty('session_token')) {
      stmt += " session_token = ? AND ";
      args.push(criteria["session_token"]);
    }
    if (criteria.hasOwnProperty('check_token')) {
      stmt += " check_token = ? AND ";
      args.push(criteria["check_token"]);
    }
    if (criteria.hasOwnProperty('reference_number')) {
      stmt += " reference_number = ? AND ";
      args.push(criteria["reference_number"]);
    }
    if (criteria.hasOwnProperty('token')) {
      stmt += " token = ? AND ";
      args.push(criteria["token"]);
    }
    if (criteria.hasOwnProperty('trackId')) {
      stmt += " trackId = ? AND ";
      args.push(criteria["trackId"]);
    }
    if (criteria.hasOwnProperty('token_id')) {
      stmt += " token_id = ? AND ";
      args.push(criteria["token_id"]);
    }
    if (criteria.hasOwnProperty('order_no')) {
      stmt += " order_no = ? AND ";
      args.push(criteria["order_no"]);
    }
    if (criteria.hasOwnProperty('paymentId')) {
      stmt += " paymentId = ? AND ";
      args.push(criteria["paymentId"]);
    }
    if (criteria.hasOwnProperty('accessCode')) {
      stmt += " accessCode = ? AND ";
      args.push(criteria["accessCode"]);
    }
    if (criteria.hasOwnProperty('payment_id')) {
      stmt += " payment_id = ? AND ";
      args.push(criteria["payment_id"]);
    }
    if (criteria.hasOwnProperty('status')) {
      stmt += " status = ? AND ";
      args.push(criteria["status"]);
    }
    if (criteria.hasOwnProperty('order_custom_id')) {
      stmt += " order_custom_id = ? AND ";
      args.push(criteria["order_custom_id"]);
    }
    if (criteria.hasOwnProperty('card_registration_id')) {
      stmt += " card_registration_id = ? AND ";
      args.push(criteria["card_registration_id"]);
    }
    if (criteria.hasOwnProperty('order_reference')) {
      stmt += " order_reference = ? AND ";
      args.push(criteria["order_reference"]);
    }
    if (criteria.hasOwnProperty('expiry_date')) {
      stmt += " expiry_date = ? AND ";
      args.push(criteria["expiry_date"]);
    }
    stmt += " 1=1 ";

    if (order) {
      stmt += ` ORDER BY ${order.key} ${order.sort}`
    }
    if (limit) {
      stmt += ` LIMIT ${limit}`
    }
    if (offset) {
      stmt += ` OFFSET ${offset}`
    }

    try {
      const data = await dbHandler.executeQuery(apiReference, event, stmt, args);
      resolve(data);
    } catch (err) {
      reject(err);
    }
  })
};

exports.updateDataInTable = (apiReference, tableName, event, updateObj, whereObj) => {
  console.log(updateObj)
  return new Promise(async (resolve, reject) => {
    var sql = `UPDATE ${tableName} SET ? WHERE `;
    var args = [updateObj];
    if (whereObj.hasOwnProperty('isVerified')) {
      sql += " isVerified = ? AND ";
      args.push(whereObj["isVerified"]);
    }
    if (whereObj.hasOwnProperty('username')) {
      sql += " username = ? AND ";
      args.push(whereObj["username"]);
    }
    if (whereObj.hasOwnProperty('phone_no')) {
      sql += " phone_no = ? AND ";
      args.push(whereObj["phone_no"]);
    }
    if (whereObj.hasOwnProperty('OrderNumber')) {
      sql += " OrderNumber = ? AND ";
      args.push(whereObj["OrderNumber"]);
    }
    if (whereObj.hasOwnProperty('order_code')) {
      sql += " order_code = ? AND ";
      args.push(whereObj["order_code"]);
    }
    if (whereObj.hasOwnProperty('card_id')) {
      sql += " card_id = ? AND ";
      args.push(whereObj["card_id"]);
    }
    if (whereObj.hasOwnProperty('user_id')) {
      sql += " user_id = ? AND ";
      args.push(whereObj["user_id"]);
    }
    if (whereObj.hasOwnProperty('form_id')) {
      sql += " form_id = ? AND ";
      args.push(whereObj["form_id"]);
    }
    if (whereObj.hasOwnProperty('vendor_id')) {
      sql += " vendor_id = ? AND ";
      args.push(whereObj["vendor_id"]);
    }
    if (whereObj.hasOwnProperty('id')) {
      sql += " id = ? AND ";
      args.push(whereObj["id"]);
    }
    if (whereObj.hasOwnProperty('offering_id')) {
      sql += " offering_id = ? AND ";
      args.push(whereObj["offering_id"]);
    }
    if (whereObj.hasOwnProperty('card_token')) {
      sql += " card_token = ? AND ";
      args.push(whereObj["card_token"]);
    }
    if (whereObj.hasOwnProperty('order_id')) {
      sql += " order_id = ? AND ";
      args.push(whereObj["order_id"]);
    }
    if (whereObj.hasOwnProperty('amount')) {
      sql += " amount = ? AND ";
      args.push(whereObj["amount"]);
    }
    if (whereObj.hasOwnProperty('product_customer_id')) {
      sql += " product_customer_id = ? AND ";
      args.push(whereObj["product_customer_id"]);
    }
    if (whereObj.hasOwnProperty('link_id')) {
      sql += " link_id = ? AND ";
      args.push(whereObj["link_id"]);
    }
    if (whereObj.hasOwnProperty('token')) {
      sql += " token = ? AND ";
      args.push(whereObj["token"]);
    }
    if (whereObj.hasOwnProperty('session_token')) {
      sql += " session_token = ? AND ";
      args.push(whereObj["session_token"]);
    }
    if (whereObj.hasOwnProperty('customer_id')) {
      sql += " customer_id = ? AND ";
      args.push(whereObj["customer_id"]);
    }
    if (whereObj.hasOwnProperty('razorpay_account_id')) {
      sql += " razorpay_account_id = ? AND ";
      args.push(whereObj["razorpay_account_id"]);
    }
    if (whereObj.hasOwnProperty('reference_number')) {
      sql += " reference_number = ? AND ";
      args.push(whereObj["reference_number"]);
    }
    if (whereObj.hasOwnProperty('account_id')) {
      sql += " account_id = ? AND ";
      args.push(whereObj["account_id"]);
    }
    if (whereObj.hasOwnProperty('merchant_id')) {
      sql += " merchant_id = ? AND ";
      args.push(whereObj["merchant_id"]);
    }
    if (whereObj.hasOwnProperty('trackId')) {
      sql += " trackId = ? AND ";
      args.push(whereObj["trackId"]);
    }
    sql += " 1=1 ";
    console.log(args)
    try {
      await dbHandler.executeQuery(apiReference, event, sql, args);
      resolve();
    } catch (err) {
      reject(err);
    }
  })
}

exports.attachParamsToUrl = (apiReference, params, url) => {
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
exports.makeExternalRequest = function (apiReference, method, url, body, authorization, callback) {
  var options = {
    url: url,
    method: method,
    body: body,
    json: true,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  };
  if (authorization) {
    options.headers.Authorization = authorization;
  }
  request(options, function (error, response, body) {
    if (error) {
      callback(new Error('Failure from External Server'));
    }
    else {
      try {
        body = JSON.parse(body);
        callback(null, body);
      }
      catch (err) {
        callback(null, body);
      }
    }
  });
}