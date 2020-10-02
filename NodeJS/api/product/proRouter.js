const elcRoutr = require("express").Router();
var elcController = require('../product/proController');
const resHndlr = require("../global/responder");



elcRoutr.route("/productCreate")
.post( function(req,res){
elcController.productCreate(req,res);	
})

elcRoutr.route("/findAllProduct")
.get(function(req,res){
		elcController.findAllProduct(req,res);	
})

module.exports = elcRoutr
