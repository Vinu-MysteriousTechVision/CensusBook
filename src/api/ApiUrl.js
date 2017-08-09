// var SOKONOKADO_BASE_URL                       = 'https://sokonokado.com';//PRODUCTION SERVER BASE URL
var SOKONOKADO_BASE_URL                       = 'http://52.66.73.199';//S3 SERVER BASE URL
// var SOKONOKADO_BASE_URL                       = 'http://192.168.2.143:3000';//LOCAL SERVER BASE URL

var SOKONOKADO_API                            = SOKONOKADO_BASE_URL + '/api';
exports.SOKONOKADO_REGISTRATION               = SOKONOKADO_API + '/users';
exports.SOKONOKADO_LOGIN                      = SOKONOKADO_API + '/users/sign_in';
exports.SOKONOKADO_LOGOUT                     = SOKONOKADO_API + '/users/sign_out';
