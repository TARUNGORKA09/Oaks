/**
 * Created by sumeet on 10/05/19.
 */

exports.responseMessages = {
  "GET_USER_CARD": "GET_USER_CARD",
  "PARAMETER_MISSING": "PARAMETER_MISSING",
  "INVALID_ACCESS_TOKEN": "INVALID_ACCESS_TOKEN",
  "WRONG_PASSWORD": "WRONG_PASSWORD",
  "ACTION_COMPLETE": "ACTION_COMPLETE",
  "SHOW_ERROR_MESSAGE": "SHOW_ERROR_MESSAGE",
  "ERROR_IN_EXECUTION": "ERROR_IN_EXECUTION",
  "INVALID_ACCESS": "INVALID_ACCESS",
  "EMAIL_NOT_EXISTS": "EMAIL_NOT_EXISTS",
  "CARD_NOT_ADDED_ERROR": "CARD_NOT_ADDED_ERROR",
  "USER_NOT_FOUND": "USER_NOT_FOUND",
  "PAYMENT_FAILED": "PAYMENT_FAILED",
  "SOMETHING_WENT_WRONG": "SOMETHING_WENT_WRONG",
  "LOW_MINIMUM_BALANCE": "LOW_MINIMUM_BALANCE",
  "LOW_RC_AMOUNT": "LOW_RC_AMOUNT",
  "INVALID_API_KEY": "INVALID_API_KEY",
  "EMAIl_ALREADY_EXIST": "EMAIL_ALREADY_EXIST",
  "PHONE_NUMBER_ALREADY_EXIST": "PHONE_NUMBER_ALREADY_EXIST",
  "SIGN_UP_SUCCESSFUL": "SIGN_UP_SUCCESSFUL",
  "LOGIN_SUCCESSFULLY": "LOGIN_SUCCESSFULLY",
  "SIGNUP_SUCCESSFULLY": "SIGNUP_SUCCESSFULLY",
  "PLEASE_UPDATE_YOUR_WALLET": "PLEASE_UPDATE_YOUR_WALLET",
  "SIGN_UP_FAILED": "SIGN_UP_FAILED",
  "API_KEY_GENERATED": "API_KEY_GENERATED",
  "GET_API_KEY": "GET_API_KEY",
  "GET_USER_DETAIL": "GET_USER_DETAIL",
  "AUTHENTICATE_USER_API_KEY": "AUTHENTICATE_USER_API_KEY",
  "ADD_USER_CARD": "ADD_USER_CARD",
  "LOGIN_FAILED": "LOGIN_FAILED",
  "NAME_EMPTY":"NAME_EMPTY",
  "INVALID_USER_ID":"INVALID_USER_ID",
  "NOT_REGISTERED":"NOT_REGISTERED",
  "WALLET_CREATED_SUCCESSFUL":"WALLET_CREATED_SUCCESSFUL"
};


//FOR FLAGS
exports.responseFlags = {
  LOGIN_FAILED:401,
  ADD_USER_CARD: 201,
  GET_USER_CARD: 200,
  AUTHENTICATE_USER_API_KEY: 200,
  GET_USER_DETAIL: 200,
  API_KEY_GENERATED: 201,
  PARAMETER_MISSING: 400,
  INVALID_ACCESS_TOKEN: 401,
  INVALID_ACCESS: 401,
  WRONG_PASSWORD: 202,
  ACTION_COMPLETE: 200,
  SHOW_ERROR_MESSAGE: 400,
  ERROR_IN_EXECUTION: 400,
  USER_NOT_FOUND: 404,
  EMAIL_NOT_EXISTS: 404,
  PAYMENT_FAILED: 400,
  INVALID_API_KEY: 401,
  LOGIN_SUCCESSFULLY: 200,
  SIGNUP_SUCCESSFULLY: 200,
  ACTION_NOT_ALLOWED: 201
};

exports.stripeVariables = {
  STRIPE_SIGNATURE : 'stripe-signature'
}

exports.PAYMENT_INTENT_STATUS  = {
  UNPAID  : 0,
  PAID    : 1,
  DISABLED: 2
};

exports.WEBHOOK_TYPES  = {
  STRIPE_WEBHOOK: 1,
  SSL_COMMERZ   : 2,
  LIMELIGHT     : 3,
  WIRE_CARD     : 4,
  TWO_CHECKOUT  : 5,
  AZUL          : 6,
  FAC3D         : 8,
  CHECKOUT      : 9,
  PAYHERE       : 11,
  VIVA          : 12,
  HYPERPAY      : 13,
  CREDIMAX      : 14,
  MYFATOORAH    : 15,
  THETELLER     : 16,
  PAYNET        : 17,
  TAP           : 18,
  CURLEC        : 19,
  WIPAY         : 20,
  PAGARME       : 21,
  WHOOSH        : 22,
  MTN           : 23,
  STRIPE_WECHAT : 24,
  ONEPAY        : 25,
  PAGOPLUX      : 26,
  PAYPAL        : 27,
  MYBILLPAYMENT : 28,
  BANKOPEN      : 29,
  PAYTM         : 30,
  VALITOR       : 31,
  CARDNET       : 32,
  BHARATPE      : 33,
  TRUEVO        : 34,
  MANGOPAY      : 35,
  PAYZEN        : 36,
  BILLPLZ       : 37,
  FIRSTDATA     : 38,
  FLUTTERWAVE   : 39,
  PAYSTACK_USSD : 40,
  CYBERSOURCE   : 41,
  SQUAREUP      : 42,
  ATHMOVIL      : 43,
  BANKALFALAH   : 44,
  PAYFAST       : 45,
  RAZORPAY      : 46,
  CULQI         : 47,
  GOCARDLESS    : 48,
  NMI           : 49,
  SUNCASH       : 50,
  ETISALAT      : 51,
  MPESA         : 52,
  IPAY88        : 53,
  PROXYPAY      : 54,
  ADYEN         : 55,
  HYPUR         : 56,
  PAYULATUM     : 57,
  PAYMARK       : 58,
  PIXELPAY      : 59,
  DOKU          : 60,
  PEACH         : 61,
  GOOGLEPAY     : 62,
  NOQOODY       : 63,
  PAYWAY        : 64,
  PAGUELOFACIL  : 65,
  SENDWYRE      : 66,
  LIBELULA      : 67,
  URWAY         : 69,
  GTPAY         : 70,
  VPOS          : 71,
  VUKA          : 72,
  CXPAY         : 73,
  TELR          : 80,
  PAYKU         : 74,
  BAMBORA       : 75,
  KORTA         : 76,
  EPAYCO        : 77,
  PAYWAYONE     : 78,
  PLACETOPAY    : 79,
  UNIPAY        : 88,
  EASYPAISA     : 89,
  PAYMAYA       : 90,
  CMI           : 91,
  BENEFIT       : 92,
  PAYMENTEZ       : 94,
  CEVNN           : 95,
  STRIPE_GPAY     : 101,
  STRIPE_APPLEPAY : 102,
  EWAY            : 103,
  REVOLUT         : 104,
  PAYGATE         : 105,
  OPENPAY         : 106,
  TWO_CHECKOUT_V2 : 107,
  SBM             : 109,
  PAGALOEPAY      : 110,
  WOMPI           : 113,
  KANOO           : 201,
  WIPAYV2         : 313,
  QUADPAY         : 112,
  REVOLUT         : 104,
  PAYMENTEZ       : 94,
  QPAY            : 111,
  NIUBIZ          : 144,
  PAYZENV2        : 310,
  KEYPAY          : 123,
  HALYKBANK       : 401,
  JAZZCASH        : 402,
  REDSYS          : 302,
  RAZORPAY_UPI    : 307,
  EASYPAISAV2     : 320,
  PAYTM_UPI       : 308,
  ORANGEPAY       : 312,
  PAYWAY_ABA      : 311,
  APCOPAY         : 316,
  SPOTII          : 314,
  PAYTABS         : 325,
  ZAMBIA_MOBILE_MONEY      : 321,
  FAWRY           : 326
};

exports.PAYMENT_GATEWAY  = {
  STRIPE       : 1,
  SSL_COMMERZ  : 2,
  LIMELIGHT    : 3,
  WIRE_CARD    : 4,
  TWO_CHECKOUT : 5,
  AZUL         : 6,
  FATTMERCHANT : 7,
  FAC3D        : 8,
  CHECKOUT     : 9,
  PAYHERE      : 11,
  VIVA         : 12,
  HYPERPAY     : 13,
  CREDIMAX     : 14,
  MYFATOORAH   : 15,
  THETELLER    : 16,
  PAYNET       : 17,
  TAP          : 18,
  CURLEC       : 19,
  WIPAY        : 20,
  PAGARME      : 21,
  WHOOSH       : 22,
  MTN          : 23,
  STRIPE_WECHAT: 24,
  ONEPAY       : 25,
  PAGOPLUX     : 26,
  PAYPAL       : 27,
  MYBILLPAYMENT: 28,
  BANKOPEN     : 29,
  PAYTM        : 30,
  VALITOR      : 31,
  CARDNET      : 32,
  BHARATPE     : 33,
  TRUEVO       : 34,
  MANGOPAY     : 35,
  PAYZEN       : 36,
  BILLPLZ      : 37,
  FIRSTDATA    : 38,
  FLUTTERWAVE  : 39,
  PAYSTACK_USSD: 40,
  CYBERSOURCE  : 41,
  SQUAREUP     : 42,
  ATHMOVIL     : 43,
  BANKALFALAH  : 44,
  PAYFAST      : 45,
  RAZORPAY     : 46,
  CULQI        : 47,
  GOCARDLESS   : 48,
  NMI          : 49,
  SUNCASH      : 50,
  ETISALAT     : 51,
  MPESA        : 52,
  IPAY88       : 53,
  PROXYPAY     : 54,
  ADYEN        : 55,
  HYPUR        : 56,
  PAYULATUM    : 57,
  PAYMARK      : 58,
  PIXELPAY     : 59,
  DOKU         : 60,
  PEACH        : 61,
  GOOGLEPAY    : 62,
  NOQOODY      : 63,
  PAYWAY       : 64,
  PAGUELOFACIL : 65,
  SENDWYRE     : 66,
  LIBELULA     : 67,
  URWAY        : 69,
  GTPAY        : 70,
  VPOS         : 71,
  VUKA         : 72,
  CXPAY        : 73,
  PAYKU        : 74,
  BAMBORA      : 75,
  KORTA        : 76,
  EPAYCO       : 77,
  PAYWAYONE    : 78,
  PLACETOPAY   : 79,
  TELR         : 80,
  UNIPAY       : 88,
  EASYPAISA    : 89,
  PAYMAYA      : 90,
  CMI          : 91,
  BENEFIT      : 92,
  CEVNN        : 95,
  STRIPE_GPAY     : 101,
  STRIPE_APPLEPAY : 102,
  EWAY            : 103,
  OPENPAY         : 106,
  PAYGATE         : 105,
  SBM             : 109,
  TWO_CHECKOUT_V2 : 107,
  REVOLUT         : 104,
  PAYMENTEZ       : 94,
  KANOO           : 201,
  QUADPAY         : 112,
  REVOLUT         : 104,
  PAYMENTEZ       : 94,
  WIPAYV2         : 313,
  PAGALOEPAY      : 110,
  QPAY            : 111,
  NIUBIZ          : 114,
  WOMPI           : 113,
  PAYZENV2        : 310,
  KEYPAY          : 123,
  HALYKBANK       : 401,
  JAZZCASH        : 402,
  REDSYS          : 302,
  RAZORPAY_UPI    : 307,
  EASYPAISAV2     : 320,
  PAYTM_UPI       : 308,
  ORANGEPAY       : 312,
  PAYWAY_ABA      : 311,
  APCOPAY         : 316,
  SPOTII          : 314,
  PAYTABS         : 325,     
  ZAMBIA_NOBILE_MONEY      : 321,
  FAWRY           : 326
};


exports.FAC_VALUES = {
  CURRENCY_CODE :{
      "USD" : 840,
      "ZAR" : 710,
      "INR" : 356,
      "EUR" : 978,
      "NGN" : 566,
      "BMD" : 60,
      "JMD" : 388,
      "TTD" : 780,
      "CRC" : 188,
      "GTQ" : 320,
      "XCD" : 951,
      "NIO" : 558
  },
  CURRENCY_CODE_REVERSE :{
     840: "USD",
     710: "ZAR",
     356: "INR",
     978: "EUR",
     566: "NGN",
      60: "BMD",
     388: "JMD",
     780: "TTD",
     188: "CRC",
     320: "GTQ",
     951: "XCD",
     558: "NIO"
  },
  CURRENCY_EXPONENT_VALUE :{
     "840": 2,
     "710": 2,
     "356": 2,
     "978": 2,
     "566": 2,
      "60": 2,
     "388": 2,
     "780": 2,
     "188": 2,
     "320": 2,
     "951": 2,
     "558": 2
  },
  ACQUIRER_ID : "464748",
  HOSTED_PAGE_OPTIONS : {
      location    : config.get("facUrls.authorizationLocation"),
      soap_version: "SOAP_1_1",
      exceptions  : 0,
      trace       : 1,
      cache_wsdl  : "WSDL_CACHE_NONE"
  },
  TRANSACTION_MODIFICATION_OPTIONS : {
      location    : config.get("facUrls.transactionModificationLocation"),
      soap_version: "SOAP_1_1",
      exceptions  : 0,
      trace       : 1,
      cache_wsdl  : "WSDL_CACHE_NONE"
  },
  TRANSACTION_STATUS :{
      TOKEN_ISSUED: "AUTH_TOKEN_ISSUED",
      AUTHORIZED  : "AUTHORIZED",
      CAPTURED    : "CAPTURED",
      REFUNDED    : "REFUNDED",
      REVERSED    : "REVERSED"
  },
  EVENTS : {
      CREATE_AUTHORIZATION_TOKEN: "CREATE_AUTHORIZATION_TOKEN",
      AUTHORIZE_PAYMENT         : "AUTHORIZE_PAYMENT",
      CAPTURE_PAYMENT           : "CAPTURE_PAYMENT",
      CREAT_REFUND              : "CREATE_REFUND",
      VERIFY_PAYMENT            : "VERIFY_PAYMENT",
      TOKENIZATION              : "TOKENIZATION_OF_CARD",
      ADD_CARD_CALLBACK         : "ADD_CARD_CALLBACK"
  },
  TRANSACTION_MODIFICATION_TYPES : {
      CAPTURE : 1,
      REFUND  : 2,
      REVERSAL: 3
  },
  FAC_CODE : {
      AUTHORIZE    : 8,
      AUTHORIZE3DS : 128,
      TOKENIZE     : 128,
      AUTH_AND_CAPTURE : 256,
      THREE_3DS : 264,
      TOKENIZATION_OPTIONS : {
          location    : config.get("facUrls.tokenizationLocation"),
          soap_version: "SOAP_1_1",
          exceptions  : 0,
          trace       : 1,
          cache_wsdl  : "WSDL_CACHE_NONE"
      }
  }
}

exports.OFFERING_WEBHOOK_CONFIG = {
  1 : {
    url : config.get("webhookConfig.tookan.baseUrl")  + "/auth/webhook",
    key : config.get("webhookConfig.tookan.secret_key"),
    wire_card_url : config.get("webhookConfig.tookan.baseUrl")  + "/jp_payment_callback",
    reverse_key : config.get("webhookConfig.tookan.secret_key"),
  },
  2 : {
    url : config.get("webhookConfig.yelo.baseUrl")  + "/stripe/webhook",
    key : config.get("webhookConfig.yelo.secret_key"),
    reverse_key : config.get("webhookConfig.yelo.secret_key"),
    wire_card_url : config.get("webhookConfig.yelo.baseUrl")  + "/payment/webhook"

  },
  6 : {
    url : config.get("webhookConfig.hippo.baseUrl")  + "/api/payment/webhook",
    key : config.get("webhookConfig.hippo.secret_key"),
    reverse_key : config.get("webhookConfig.hippo.reverse_secret_key")
  },
  15 : {
    url : config.get("webhookConfig.fugu.baseUrl")  + "/api/payment/webhook",
    key : config.get("webhookConfig.fugu.secret_key"),
    reverse_key : config.get("webhookConfig.fugu.secret_key")
  },
  60: {
    url: config.get("webhookConfig.tiger.baseUrl"),
    key: config.get("webhookConfig.tiger.secret_key"),
    wire_card_url: config.get("webhookConfig.tiger.baseUrl") + "/api/payment/webhook",
    reverse_key: config.get("webhookConfig.tiger.secret_key")
  },
  64: {
    url: config.get("webhookConfig.husky.baseUrl"),
    key: config.get("webhookConfig.husky.secret_key"),
    wire_card_url: config.get("webhookConfig.husky.baseUrl") + "/api/payment/webhook",
    reverse_key : config.get("webhookConfig.husky.secret_key")
  }
};

exports.stripePaymentStatus = {
  FAILED: 0,
  AUTH_REQUIRED: 1,
  SUCCESS: 2 
}

exports.errorMessages = {
  INVALID_TRANSACTION : "Transaction not found",
  TRANSACTION_ALREADY_SUCCESSFUL: "This is transaction is already completed",
  INVALID_STRIPE_KEYS: "Stripe credentials are not valid",
  STRIPE_OLD_CUSTOMER: "Due to Strong Customer Authentication (SCA), a new rule coming into effect on September 14, 2019, as part of PSD2 regulation, you need to reauthenticate your card. Please delete (if any) the card and re-add it.",
  CARD_DECLINE: "Your card has been declined.",
  STRIPE_RATE_LIMIT: "Too many requests made to the API too quickly.",
  INVALID_REQUEST: "Request made to payment gateway is invalid/ paramter missing."
}

exports.OFFERING_REVERSE = {
  "TOOKAN": 1,
  "YELO"  : 2,
  "HIPPO" : 6,
  "FUGU"  : 15,
  "TIGER" : 60,
  "HUSKY" : 64
}

exports.OFFERING = {
  1 : "TOOKAN",
  2 : "YELO",
  6 : "HIPPO"
}

exports.razorPay = {
  URL : {
    base_url : "https://api.razorpay.com"
  },
  tableName : {
    TRANSACTION_LOGS : "tb_razorpay_transaction_logs",
    SAVE_CREDENTIALS : "tb_razorpay_credentials"
  }
}

exports.sslCommerz = {
  URL : {
    success_url : config.get('gateway_base_url') + "/ssl_commerz/transaction_information?status=1",
    fail_url    : config.get('gateway_base_url') + "/ssl_commerz/transaction_information?status=2",
    cancel_url  : config.get('gateway_base_url') + "/ssl_commerz/transaction_information?status=3"
  },
  tableName : {
    SAVE_CREDENTIALS    : "tb_sslcommerz_credentials", 
    TRANSACTION_LOGS    : "tb_sslcommerz_transaction_logs",
    REFUND_LOGS         : "tb_sslcommerz_refund_logs"
  },
  status : {
    SUCCESS : 1,
    FAILED  : 2,
    CANCEL  : 3
  },
  redirect_url : {
    yelo : {

      SUCCESS     : config.get('webhookConfig.yelo.publicUrl') + "/sslCommerz/success.html?",
      FALIURE     : config.get('webhookConfig.yelo.publicUrl') + "/sslCommerz/error.html?",
    }
  },
  webhook_url : {
    YELO : ""
  },
  APIs : {
    get_redirect_url : config.get('sslcommerz.baseUrl') + "/gwprocess/v4/api.php",
    validate_payment : config.get('sslcommerz.baseUrl') + "/validator/api/validationserverAPI.php",
    refund : config.get('sslcommerz.baseUrl') + "/validator/api/merchantTransIDvalidationAPI.php"
  }
}

exports.twocheckout = {
  tablename : { 
    TRANSACTION_LOGS : "tb_2checkout_transaction_logs",
    SAVE_CREDENTIALS : "tb_2checkout_merchant_credentials",
    CUSTOMER         : "tb_2checkout_customer_details",
    REFUND_LOGS      : "tb_2checkout_refund_logs",
    CARD_DETAILS     : "tb_2checkout_card_details"
  }
}

exports.FAC3D = {
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/fac3D/sendData"
    },
    HIPPO : {
      AMOUNT : config.get('webhookConfig.hippo.baseUrl') + "/api/payment/getTransactionDetails"
    },
    TIGER : "https://stagingdad.yelo.red//api/v2/get_fac_order_details"
  }
}

exports.WIPAYV2 = {
  URLs : {
    TT : "https://tt.wipayfinancial.com/plugins/payments/request",
    JM : "https://jm.wipayfinancial.com/plugins/payments/request",
    BB : "https://bb.wipayfinancial.com/plugins/payments/request"
  }
}

exports.VIVA = {
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/viva/sendData"
    },
    CREATE_ORDER : config.get('viva.base_url') + "/api/orders",
    REDIRECT_URL : config.get('viva.base_url') + "/web/checkout?ref=",
    REFUND       : config.get('viva.base_url') + "/api/transactions",
    WALLET       : config.get('viva.base_url') + "/api/wallets"
  },
  CURRENCY_NUMBER : {
    EUR : 978,
    GBP : 826,
    USD : 840
  }
}

exports.HYPERPAY = {
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/hyperpay/sendData"
    },
    CREATE_CHECKOUT_ID : config.get('hyperpay.base_url') + "/v1/checkouts"
  }
}

exports.CREDIMAX = {
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/payment/sendData"
    },
      TOOKAN : config.get('webhookConfig.tookan.baseUrl') + "/payment/sendData"
  }
}
exports.YELO_DATA_URL = config.get('webhookConfig.yelo.baseUrl') + "/payment/sendData";
exports.HIPPO_DATA_URL = config.get('webhookConfig.hippo.baseUrl') + "/api/payment/getTransactionDetails";
exports.HUSKY_DATA_URL = config.get('webhookConfig.husky.baseUrl') + "/api/payment/details";
exports.TOOKAN_DATA_URL = config.get('webhookConfig.tookan.baseUrl') + "/tookan/sendData";

exports.CHECKOUT = {
  AMOUNT_VALUE : {
    FULL : [ "XOF" , "VND", "VUV", "KRW", "RWF", "PYG", "JPY", "XPF", "CLF", "KMF", "ISK", "GNF", "DJF", "BIF"],
    ONE_THOUSANDTH : [ "TND", "OMR", "KWD", "JOD", "LYD","BHD"] 
  },
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/checkout/sendData"
    },
    AUTHORIZE : config.get('checkout.base_url') + "/payments",
    APPLE_PAY : config.get('checkout.base_url') + "/tokens"
  },
  MULTIPLIER : {
    FULL : 1,
    HUNDREDTH : 100,
    THOUSANDTH : 1000
  }
}

exports.PAYHERE = {
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/payhere/sendData"
    }
  },
  STATUS_CODE : {
    TRANSACTION_FAIL : 0,
    TRANSACTION_SUCCESS : 1,
    SUCCESS_PAYHERE : 2
  }
}

exports.azul = {
  tableName : {
    SAVE_CREDENTIALS : "tb_azul_credentials"
  },
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/azul/sendData"
    }
  }
}

exports.urway = {
  tableName : {
    SAVE_CREDENTIALS : "tb_urway_creds"
  },
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/urway/sendData"
    }
  },
  ACTIONS: {
    MAKE_PAYMENT : 1,
    REFUND       : 2
  }
}

exports.cxpay = {
  tableName : {
    SAVE_CREDENTIALS : "tb_cxpay_creds"
  },
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/urway/sendData"
    }
  }
}

exports.payku = {
  tableName : {
    SAVE_CREDENTIALS : "tb_payku_creds"
  },
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/payku/sendData"
    }
  },
  status: "success",
  MERCHANT_SUBSCRIPTION: 7
}
exports.bambora = {
  tableName : {
    SAVE_CREDENTIALS : "tb_bambora_creds"
  },
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/bambora/sendData"
    }
  }
}

exports.paywayone = {
  tableName : {
    SAVE_CREDENTIALS : "tb_paywayone_creds"
  },
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/paywayone/sendData"
    }
  }
}

exports.placetopay = {
  tableName : {
    SAVE_CREDENTIALS : "tb_placetopay_creds"
  },
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/placetopay/sendData"
    }
  }
}

exports.benefit = {
  tableName : {
    SAVE_CREDENTIALS : "tb_benefit_creds"
  },
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/benefit/sendData"
    }
  },
  action : {
    PURCHASE : 1,
    REFUND   : 2,
    VOID     : 3,
    INQUIRY  : 8
  }
}

exports.eway = {
  tableName : {
    SAVE_CREDENTIALS : "tb_eway_creds"
  },
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/eway/sendData"
    }
  }
}

exports.vpos = {
  tableName : {
    SAVE_CREDENTIALS : "tb_vpos_creds"
  },
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/vpos/sendData"
    }
  }
}

exports.openpay = {
  tableName : {
    SAVE_CREDENTIALS : "tb_openpay_creds"
  },
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/openpay/sendData"
    }
  }
}

exports.cevnn = {
  tableName : {
    SAVE_CREDENTIALS : "tb_cevnn_creds"
  },
  events : {
    INVOICE_PAID       : "invoice/paid",
    INVOICE_CANCELLED  : "invoice/cancelled"

  },
  webhooks: {
    PAID_WEBHOOK       : "/cevnn/invoicePaidWebhook",
    CANCELLED_WEBHOOK  : "/cevnn/invoiceCancelledWebhook"
  },
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/cevnn/sendData"
    }
  }
}

exports.twocheckoutV2 = {
  tableName : {
    SAVE_CREDENTIALS : "tb_twocheckoutV2_creds"
  },
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/twocheckoutV2/sendData"
    }
  }
}

exports.revolut = {
  tableName : {
    SAVE_CREDENTIALS : "tb_revolut_creds"
  },
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/revolut/sendData"
    }
  }
}

exports.paymentez = {
  tableName : {
    SAVE_CREDENTIALS : "tb_paymentez_creds"
  },
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/paymentez/sendData"
    }
  }
}

exports.pagaloepay = {
  tableName : {
    SAVE_CREDENTIALS : "tb_pagalo_epay_creds",
    TRANSACTION_LOGS : "tb_pagalo_epay_transaction_logs",
  },
  
}
exports.limelight = {
  tablename : {
    SAVE_CREDENTIALS : "tb_limelight_merchant_creds",
    TRANSACTION_LOGS : "tb_limelight_transaction_logs",
    REFUND_LOGS      : "tb_limelight_refund_logs"
  },
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/limelight/sendData",
      TWOCHECKOUT_AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/twoCheckout/sendData",
      AZUL_AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/azul/sendData"
    }
  }
}
exports.applePayCheckout = {
  merchantIdentifier: "merchant.com.checkout.demo",
  displayName: "Checkout Payment Demo",
  initiative: "web"
}

exports.TRANSACTION_STATUS = {
  FAILURE : 0,
  PENDING : 1,
  SUCCESS : 2
}

exports.MYFATOORAH = {
  COUNTRIES_CONSTANTS : {
    JOD : ["Jordan",        "JOD", "+962"],
    OMR : ["Oman",          "OMN", "+968"],
    QAR : ["Qatar",         "QAT", "+974"],
    BHD : ["Bahrain",       "BHR", "+973"],
    SAR : ["Saudi Arabia",  "SAU", "+966"],
    KWD : ["Kuwait",        "KWT", "+965"],
    AED : ["UAE",           "ARE", "+971"]
  },
  CARD_METHOD : {
    "knet" : '1',
    "visa" : '2',
    "mastercard" : '2',
    "visaelectron" : '2',
    "amex" : '3'
  }
}

exports.TAP = {
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/tap/sendData"
    },
    TOOKAN : {
      AMOUNT : config.get('webhookConfig.tookan.baseUrl') + "/tookan/sendData"
    },
    CUSTOMER : config.get('tap.base_url') + "/customers",
    REFUND : config.get('tap.base_url') + "/refunds",
    CHARGE : config.get('tap.base_url') + "/charges"
  }
}

exports.WHOOSH = {
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/whoosh/sendData"
    },
    CREATE_CHECKOUT_ID          : config.get('whoosh.base_url') + "/v1/checkouts",
    CREATE_CHECKOUT_ID_SANDBOX  : config.get('whoosh.test_base_url') + "/v1/checkouts",
  }
}

exports.STRIPE_WECHAT = {
  STATUS : {
    PENDING : 1,
    SUCCESS : 2,
    FAILED  : 0
  }
}
exports.ONEPAY = {
  STATUS : {
    PENDING : 1,
    SUCCESS : 2,
    FAILED  : 0
  },
  URLs : {
    CHECK_STATUS : config.get('onepay.check_status_url')
  }
}

exports.PAGOPLUX = {
  URLs : {
    YELO : {
      AMOUNT : config.get('webhookConfig.yelo.baseUrl') + "/pagoplux/sendData"
    }
  }
}

exports.CARDS = [
  {
    type: 'amex',
    pattern: /^3[47]/,
    format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
    length: [15],
    cvcLength: [4],
    luhn: true
  }, {
    type: 'dankort',
    pattern: /^5019/,
    format: "defaultFormat",
    length: [16],
    cvcLength: [3],
    luhn: true
  }, {
    type: 'dinersclub',
    pattern: /^(36|38|30[0-5])/,
    format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
    length: [14],
    cvcLength: [3],
    luhn: true
  }, {
    type: 'discover',
    pattern: /^(6011|65|64[4-9]|622)/,
    format: "defaultFormat",
    length: [16],
    cvcLength: [3],
    luhn: true
  }, {
    type: 'jcb',
    pattern: /^35/,
    format: "defaultFormat",
    length: [16],
    cvcLength: [3],
    luhn: true
  }, {
    type: 'laser',
    pattern: /^(6706|6771|6709)/,
    format: "defaultFormat",
    length: [16, 17, 18, 19],
    cvcLength: [3],
    luhn: true
  }, {
    type: 'maestro',
    pattern: /^(5018|5020|5038|6304|6703|6708|6759|676[1-3])/,
    format: "defaultFormat",
    length: [12, 13, 14, 15, 16, 17, 18, 19],
    cvcLength: [3],
    luhn: true
  }, {
    type: 'mastercard',
    pattern: /^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/,
    format: "defaultFormat",
    length: [16],
    cvcLength: [3],
    luhn: true
  }, {
    type: 'unionpay',
    pattern: /^62/,
    format: "defaultFormat",
    length: [16, 17, 18, 19],
    cvcLength: [3],
    luhn: false
  }, {
    type: 'visaelectron',
    pattern: /^4(026|17500|405|508|844|91[37])/,
    format: "defaultFormat",
    length: [16],
    cvcLength: [3],
    luhn: true
  }, {
    type: 'elo',
    pattern: /^(4011|438935|45(1416|76|7393)|50(4175|6699|67|90[4-7])|63(6297|6368))/,
    format: "defaultFormat",
    length: [16],
    cvcLength: [3],
    luhn: true
  }, {
    type: 'visa',
    pattern: /^4/,
    format: "defaultFormat",
    length: [13, 16, 19],
    cvcLength: [3],
    luhn: true
  }
];

exports.PAYPAL = {
  INTENTS: {
    SALE: "sale",
    AUTHORIZE: "authorize"
  },
  API_END_POINTS: {
    PAYMENT: "v1/payments/payment",
    PAYOUTS: "v1/payments/payouts",
    REFUND: "v1/payments/sale",
  },
  RECIPIENT_TYPES: {
    EMAIL: "EMAIL",
    PHONE: "PHONE" // WIil not work in sandbox mode
  },
  CURRENCY_CODES: [
    "AUD","BRL","CAD","CZK","DKK","EUR","HKD","HUF","INR","ILS","JPY","MYR","MXN","TWD","NZD","NOK","PHP","PLN","GBP","RUB","SGD","SEK","CHF","THB","USD"
  ],
  PAYMENT_STATUS: {
    INITIATED: 1,
    COMPLETED: 2,
    FAILED: 3
  },
  PAYMENT_TYPES: {
    INITIATE_PAYMENT: 1,
    EXECUTE_PAYMENT: 2
  }
}

exports.MANGOPAY = {
  URL : {
    base_url : config.get('mangopay.base_url') + "/v2.01"
  },
  tableName : {
    TRANSACTION_LOGS : "tb_razorpay_transaction_logs",
    SAVE_CREDENTIALS : "tb_razorpay_credentials"
  },
  currency : {
    "FR" : "EUR",
    "US" : "USD",
    "GB" : "GBP"
  },
  currency_multiplier : {
    "EUR" : 100,
    "USD" : 100,
    "GBP" : 100
  }
}
exports.TRUEVO = {
  URLs : {
    CREATE_CHECKOUT_ID          : config.get('truevo.base_url') + "/v1/checkouts"
  }
}

exports.CURRENCY_SYMBOL = {
  USD : "US$",
  INR : "₹",
  GBP : "£",
  AUD : "A$"
}

exports.FIRSTDATA = {
  URLs : {
    CHARGE : config.get('firstdata.base_url') + "/gateway/v2/payments",
    REFUND : config.get('firstdata.base_url') + "/gateway/v2/payments",
    REFUND : config.get('firstdata.base_url') + "/gateway/v2/payments"
  }
}
exports.SQUAREUP = {
  URLs : {
    CHARGE          : config.get('squareup.base_url') + "/v2/payments",
    REFUND          : config.get('squareup.base_url') + "/v2/refunds"
  },
  VERSION         : '2020-05-28'
}
exports.ETISALAT = {
  URLs : {
    CHARGE          : config.get('etisalat.base_url')
  }
}
exports.STRIPE_CAPTURE_AMOUNT_STATUS  = {
  SUCCESS  : 1,
  FAILED   : 2,
  CANCEL   : 3,
  PARTIAL_PAYMENT: 4
};
exports.GOCARDLESS = {
  URLs : {
    GET_CUSTOMER_DATA : config.get('gocardless.base_url') + "/customers",
    REDIRECT_FLOW : config.get('gocardless.base_url') + "/redirect_flows",
    MANDATE : config.get('gocardless.base_url') + "/mandates",
    PAYMENT : config.get('gocardless.base_url') + "/payments"
  },
  VERSION : '2015-07-06'
};
exports.CYBERSOURCE = {
  CODES : {
    req_bill_to_surname                   : "First Name",
    amount                                : "Amount",
    currency                              : "Currency",
    bill_to_address_postal_code           : "Postal Code",
    bill_to_address_country               : "Country",
    bill_to_address_state                 : "State",
    bill_to_address_city                  : "City",
    bill_to_address_line1                 : "Line1",
    bill_to_phone                         : "Phone",
    bill_to_email                         : "Email",
    bill_to_surname                       : "Last Name",
    payment_method                        : "Payment Method",
    bill_to_forename                      : "First Name",
    req_payer_authentication_merchant_name: "Merchant Name",
    transaction_id                        : "Transaction ID",
    decision_rmsg                         : "Status",
    req_bill_to_forename                  : "Last Name",
    req_reference_number                  : "Reference No.",
    reference_number                      : "Reference No.",
    req_card_number                       : "Card Number",
    merchant_defined_data94               : "MDD94",
    merchant_defined_data90               : "MDD90",
    merchant_defined_data87               : "MDD87",
    merchant_defined_data5                : "MDD5",
    merchant_defined_data1                : "MDD1"
  }
}
exports.stripeConnect = {
  API_VERSION : "2019-12-03", 
  TYPE : {
    CUSTOM : "custom"
  },
  BANK_ACCOUNT : "bank_account",
  META_DATA : {
    MERCHANT : "merchant"
  },
  ROUTING_NUMBER_NEEDED : ["US", "AU", "CA", "SG", "GB"],
  IS_ACTIVE : {
    YES : 1,
    NO : 0
  }, 
  STATUS : {
    VERIFIED : 1,
    PENDING : 0,
    REJECTED : -1
  }
}
exports.HALYKBANK = {
  grant_type : "client_credentials",
  scope: "payment"
}
exports.JAZZCASH = {
  URL : {
    redirect_url : "https://webpayments.aceaapi.com",
    return_url : "https://payment.aceaapi.com"
  },
  pp_BillReference : "billRef",
  pp_Description : "payForProduct",
  pp_TxnRefNoLetter : "Y",
  pp_BankID : "TBANK",
  pp_ProductID : "RETL",
  pp_Language : "EN",
  pp_Version : "1.1",
  ppmpf_1 : "1",
  ppmpf_2 : "2",
  ppmpf_3 : "3",
  ppmpf_4 : "4",
  ppmpf_5 : "5"
}

exports.STATUS_MESSAGE = {
  SUCCESSFUL_TXN : "Payment Successfull !!",
  FAILED_TXN : "Payment Failed !! Some error occured !!"
}
exports.FLUTTERWAVE = {
  CURRENCY : "ZMW",
  TYPE : {
    CARD_PAYMENT : 1,
    MOBILE_MONEY : 2
  },
  COUNTRY : "ZM",
  PAYMENT_TYPE : "mobile_money_zambia",
  MERCHANT_SUBSCRIPTION : 7
}

exports.FAWRY = {
  TABLE : {
    KEYS             : "tb_fawry_creds",
    TRANSACTION_LOGS : "tb_fawry_transaction_logs"
  },
  STATUS_CODE   : 200,
  PAYMENT_METHOD: "CARD",
  LANGUAGE      : "en-gb",
  QUANTITY      : "1"
}