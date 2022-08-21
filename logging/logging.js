var moment = require('moment');
const { createWebhook } = require('../modules/cevnn/controllers');
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
    && apiReference.module
    && apiReference.api
    && fileSwitches
    && fileSwitches[apiReference.module] == true
    && modules
    && modules[apiReference.module]
    && modules[apiReference.module][apiReference.api] == true) {
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
  if (apiReference
    && apiReference.module
    && apiReference.api) {

    try {
      log = JSON.stringify(log);
    }
    catch (exception) {
    }
    console.error("-->" + apiReference.module + " :=: " + apiReference.api + " :=: " + log);
  }
}

var fileSwitches = {
  startup               : true,
  mysqlLib              : true,
  "stripe-pg"           : true,
  cardNet               : true,
  wipay                 : true,
  flutterwave           : true,
  FAC3D                 : true,
  razorpay              : true,
  billplz               : true,
  payouts               : true,
  paystack              : true,
  firstdata             : true,
  bankOpen              : true,
  squareup              : true,
  payhere               : true,
  myfatoorah            : true,
  payment               : true,
  'payment-form-post'   : true,
  'payment-redirect-url': true,
  gocardless            : true,
  "2checkout"           : true,
  mangopay              : true,
  ipay88                : true,
  proxypay              : true,
  pagarme               : true,
  'payment-card-charge' : true,
  bankAlfalah           : true,
  theteller             : true,
  adyen                 : true,
  mpesa                 : true,
  payzen                : true,
  paytm                 : true,
  azul                  : true,
  doku                  : true,
  peach                 : true,
  hyperpay              : true,
  paguelofacil          : true,
  cybersource           : true,
  stripeConnect         : true,
  noqoody               : true,
  paypal                : true,
  payway                : true,
  sendwyre              : true,
  libelula              : true,
  gtpay                 : true,
  sslcommerz            : true,
  urway                 : true,
  vpos                  : true,
  vuka                  : true,
  credimax              : true,
  cxpay                 : true,
  telr                  : true,
  payfast               : true,
  payku                 : true,
  tap                   : true,
  bambora               : true,
  korta                 : true,
  epayco                : true,
  paywayone             : true,
  placetopay            : true,
  unipay                : true,
  easypaisa             : true,
  paymaya               : true,
  cmi                   : true,
  benefit               : true,
  stripeGooglePay       : true,
  stripeApplePay        : true,
  eway                  : true,
  openpay               : true,
  cevnn                 : true,
  '2checkoutV2'         : true,
  revolut               : true,
  paymentez             : true,
  niubiz                : true,
  pagaloepay            : true,
  quadpay               : true,
  qpay                  : true,
  wompi                 : true,
  payzenV2              : true,
  keypay                : true,
  halykBank             : true,
  jazzcash              : true,
  Redsys                : true,
  razorpay_upi          : true,
  easypaisaV2           : true,
  paytm_upi             : true,
  wipayV2               : true,
  apcopay               : true,
  fawry                 : true
};

var modules = {
  mysqlLib: {
    executeQuery     : true,
    executeSlaveQuery: true
  },
  startup: {
    initialize: true
  },
  "stripe-pg": {
    setupIntent     : true,
    addCard         : true,
    deleteCard      : true,
    addUserKeys     : true,
    deductPayment   : true,
    authoriseWebhook: true,
    deductPaymentV2 : true
  },
  cardNet: {
    cardnetAddCreds    : true,
    cardnetAddCardView : true,
    cardnetHTMLdata    : true,
    activateCardToken  : true,
    cardnetDeleteCard  : true,
    cardnetCreateCharge: true
  },
  wipay: {
    transactionInfo: true,
    getOrderData   : true
  },
  flutterwave: {
    createTransaction  : true,
    flutterwaveCallback: true,
    transactionInfo    : true
  },
  FAC3D: {
    facPaymentCallback : true,
    getFacPaymentLink  : true,
    secure3DTransaction: true,
    saveCredentials    : true
  },
  razorpay: {
    getRedirectUrl : true,
    transactionInfo: true,
    callback       : true
  },
  billplz: {
    saveCredentials: true,
    getRedirectUrl : true,
    transactionInfo: true,
    callback       : true
  },
  payouts: {
    getAccountDetails: true,
    addAccount       : true,
    transfer         : true,
    deleteAccount    : true
  },
  paystack: {
    saveCredentials: true,
    createCharge   : true,
    callbackUrl    : true
  },
  firstdata: {
    saveCredentials : true,
    charge          : true,
    refund          : true,
    getReferenceData: true
  },
  bankOpen: {
    saveCredentials  : true,
    transactionInfo  : true,
    addAccount       : true,
    getAccountDetails: true,
    createToken      : true,
    webhook          : true
  },
  squareup: {
    saveCredentials : true,
    charge          : true,
    getKeys         : true,
    getReferenceData: true,
    refund          : true
  },
  payhere: {
    saveCredentials: true,
    transactionInfo: true,
    getKeys        : true,
    makeRedirectUrl: true
  },
  myfatoorah: {
    addMultiVendors  : true,
    getMultiVendors  : true,
    getRedirectUrl   : true,
    createTransaction: true
  },
  payment: {
    saveCredentials : true,
    getRedirectUrl  : true,
    getReferenceData: true,
    getKeys         : true,
    getPaymentKeys  : true,
    refund          : true
  },
  'payment-form-post': {
    getFormData: true,
    callback   : true,
    notify     : true
  },
  'payment-redirect-url': {
    generateUrl: true,
    callback   : true,
    createForm : true,
    notify     : true,
    status     : true
  },
  gocardless: {
    getCustomerData : true,
    charge          : true,
    deleteCustomer  : true,
    addCustomer     : true,
    completeCustomer: true
  },
  '2checkout': {
    saveCredentials: true,
    charge         : true,
    requestRefund  : true
  },
  mangopay : {
    getWallet       : true,
    saveCredentials : true,
    addMoneyToWallet: true,
    createWallet    : true,
    charge          : true
  },
  ipay88 : {
    initiate       : true,
    transactionInfo: true,
    webhook        : true
  },
  proxypay : {
    getReferenceNumber: true,
    trial             : true,
    transactionInfo   : true
  },
  pagarme : {
    deleteCard       : true,
    getCards         : true,
    requestRefund    : true,
    createTransaction: true,
    saveCredentials  : true
  },
  'payment-card-charge' : {
    getCards         : true,
    addCard          : true,
    deleteCard       : true,
    createCharge     : true,
    createTokenCharge: true
  },
  bankAlfalah : {
    initiate       : true,
    callback       : true,
    transactionInfo: true
  },
  theteller : {
    transactionInfo: true
  },
  adyen : {
    paymentResult         : true,
    generatePaymentSession: true,
    getLink               : true,
    transactionInfo3Ds    : true,
    getPaymentMethods     : true,
    requestPayment        : true
  },
  mpesa : {
    transactionInfo: true,
    getData        : true,
    initiateStkPush: true
  },
  payzen : {
    getReturnUrl: true,
    getTransactionInfo: true,
    getPaymentFormDetails: true,
    saveCredentials: true
  },
  paytm : {
    transactionInfo: true
  },
  azul : {
    createHash     : true,
    transactionInfo: true,
    saveCreds      : true,
    deleteCard     : true,
    getCards       : true
  },
  doku : {
    getFormData: true,
    identify   : true,
    notify     : true,
    callback   : true
  },
  quadpay : {
    getRedirectUrl: true ,
    transactionInfo   : true
  },
  qpay : {
    getFormData       : true,
    transactionInfo   : true
  },
  peach : {
    generateCheckoutId: true,
    transactionInfo   : true,
    capturePayment    : true,
    requestRefund     : true
  },
  jazzcash : {
    getFormData       : true,
    transactionInfo   : true
  },
  hyperpay : {
    generateCheckoutId: true,
    transactionInfo   : true,
    saveCredentials   : true,
    getPaymentMethods : true
  },
  paguelofacil: {
    addCard     : true,
    createCharge: true,
    updateCard  : true,
    getCards    : true
  },
  cybersource : {
    createSignedData             : true,
    receipt                      : true,
    createUnsigneddatafields     : true,
    createTokenSignedData        : true,
    createTokenUnsigneddatafields: true,
    getFromData                  : true,
    updateBillingDetails         : true,
    getBillingDetails            : true,
    getPaymentData               : true,
    getFormDataForToken          : true,
  },
  stripeConnect : {
    getAccountDetails: true,
    addAccount       : true,
    editAccount      : true,
    deleteAccount    : true
  },
  noqoody : {
    getLink        : true,
    transactionInfo: true
  },
  paypal : {
    payouts          : true,
    executePayment   : true,
    initiatePayment  : true,
    initiatePaymentV2: true
  },
  payway : {
    initiatePayment : true
  },
  sendwyre : {
    getRedirectUrl : true,
    transactionInfo: true
  },
  libelula : {
    transactionStatus : true
  },
  gtpay : {
    getRedirectUrl : true,
    transactionInfo: true,
    webhook: true
  },
  sslcommerz : {
    saveCredentials  : true,
    getRedirectUrl   : true,
    requestRefund    : true,
    queryRefundStatus: true,
    transactionInformation : true
  },
  urway  : {
    getPaymentUrl : true,
    transactionInfo: true,
    requestRefund: true
  },
  vpos : {
    initiateTransaction: true,
    transactionInfo    : true,
    checkStatus : true,
    requestRefund : true
  },
  vuka : {
    initiateTransaction : true,
    confirmTransaction  : true
  },
  credimax : {
    requestRefund  : true,
    generateSession: true,
    saveCredentials: true,
    transactionInfo: true,
    getCards       : true,
    createCharge   : true,
    deleteCard     : true
  },
  cxpay : {
    getRedirectUrl : true,
    transactionInfo : true,
    requestRefund : true
  },
  telr : {
    makePayment   : true,
    refundPayment : true,
    getTransactionDetails : true
  },
  payfast : {
    getRedirectUrl: true,
    getCards      : true,
    deleteCard    : true,
    charge        : true
  },
  payku : {
    getRedirectUrl : true,
    transactionInfo: true,
    completeAction: true
  },
  tap : {
    charge : true,
    getKeys: true
  },
  bambora : {
    transactionInfo : true,
    requestRefund : true
  },
  korta : {
    kortaAddCreds : true
  },
  epayco : {
    checkout       : true,
    transactionInfo: true,
    responseUrl    : true
  },
  paywayone : {
    makePayment : true
  },
  placetopay : {
    getRedirectUrl : true,
    transactionInfo : true,
    requestRefund : true
  },
  unipay : {
    getCards       : true,
    deleteCard     : true,
    initiatePayment: true,
    charge         : true,
    returnUrl      : true,
    callback       : true,
    callback1      : true
  },
  easypaisa : {
    initiatePayment : true,
    postBackURL     : true
  },
  paymaya : {
    getRedirectUrl : true,
    transactionInfo: true
  },
  cmi : {
    initiatePayment: true,
    transactionInfo: true,
    callback       : true
  },
  benefit : {
    getRedirectUrl : true,
    transactionInfo : true,
    merchantAcknowledgement : true
  },
  stripeGooglePay : {
    createPaymentIntent : true,
    transactionInfo: true
  },
  stripeApplePay : {
    transactionInfo: true
  },
  eway : {
    getRedirectUrl : true,
    transactionInfo: true
  },
  wompi : {
    getFormData : true,
    transactionInfo: true
  },
  openpay : {
    getRedirectUrl : true,
    transactionInfo : true
  },
  cevnn : {
    iframeDetails : true,
    transactionInfo: true,
    invoiceCancelledWebhook: true,
    invoicePaidWebhook: true,
    createWebhook : true
  },
  '2checkoutV2': {
    transactionInfo : true,
    createSale : true,
    requestRefund : true
  },
  revolut : {
    createOrder : true,
    transactionInfo : true,
    requestRefund : true
  },
  paymentez : {
    getRedirectUrl : true,
    transactionInfo : true
  },
  niubiz : {
    transactionInfo : true
  },
  pagaloepay : {
    makePayment: true
  },
  payzenV2 : {
    getFormToken: true,
    requestRefund: true,
    transactionInfo: true
  },
  keypay : {
    getRedirectUrl : true,
    transactionInfo : true,
    verifyTransaction : true
  },
  halykBank : {
    getToken : true,
    transactionInfo : true
  }, 
  Redsys : {
    getFormToken: true,
    transactionInfo: true,
    verifyTransaction: true
  },
  razorpay_upi : {
    transactionInfo: true
  },
  easypaisaV2 : {
    getFormData : true,
    transactionInfo : true
  },
  fawry : {
    createCharge : true,
    getFormData  : true
  }
};