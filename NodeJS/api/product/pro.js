var mongoose = require('mongoose');

const Schema = mongoose.Schema;
var electronicSchema = mongoose.Schema({
	Name:{type:String,require:true},
	Descrition:{type:String,require:true},
	RAM:{type:Number,require:true},
	Processor:{type:String,require:true},
	Type:{type:String,enum:['Mobile','Laptop'],default: 'Mobile',require:true}

},{strict:false})
	


module.exports = mongoose.model('Electronic',electronicSchema);

