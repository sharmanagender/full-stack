const Constants = require('./proConstants');
var Electronic = require('./pro');
const resHndlr = require("../global/responder");
var mongoose = require('mongoose');
var async = require("async");
mongoose.Promise = global.Promise;

module.exports = {//Start
  'productCreate':  async (req, res) => { 
    let {
        Name,
        Descrition,
        RAM,
        Processor,
        Type
      } = req.body
        try{
            if (!req.body.Name) {
             return resHndlr.apiResponder(req, res,"Please Fill The Name Field", 500);
            } 
            else if (!req.body.Type) {
               return resHndlr.apiResponder(req, res,"Please Fill The Type Field", 500);
            } 
            else if (!req.body.Descrition) {
              return resHndlr.apiResponder(req, res,"Please Fill The Descrition Field", 500);
            }
            else  if (!req.body.RAM) {
              return resHndlr.apiResponder(req, res, "Please Fill The RAM Field", 500);
            }
            else if (!req.body.Processor) {
              return resHndlr.apiResponder(req, res, "Please Fill The Processor Field", 500);
            } 
       else{
      Electronic.create(req.body,(err,saveDetail)=>{
       if(err){
               return resHndlr.apiResponder(req, res, Constants.MESSAGES.SomeThingWrong, 400)
         }else{
           return resHndlr.apiResponder(req, res, "Save Product Successfully", 200, saveDetail)
         }
       })
   }
      }catch{
          return resHndlr.apiResponder(req, res, Constants.MESSAGES.SomeThingWrong, 400)
      }
  },
  'findAllProduct': async (req, res) => {
   try{ 
  Electronic.find({})
    .then((result)=>{
      return resHndlr.apiResponder(req, res, "Product List", 200, result)
    })
    .catch((error)=>{
      return resHndlr.apiResponder(req, res, Constants.MESSAGES.SomeThingWrong, 400)
    })
 }catch{
    return resHndlr.apiResponder(req, res, Constants.MESSAGES.SomeThingWrong, 400)
   }
  }

}//End
