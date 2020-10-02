var express = require('express'),
app = express()
const responseHandler = require('../global/responder');
var proRouters =  require('../product/proRouter');

module.exports = function(app){
	app.use('/product', proRouters);
	app.use(responseHandler.apiResponder);
}