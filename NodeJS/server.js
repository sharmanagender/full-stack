var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const cors =require('cors')
var mongoose  = require('mongoose');
var http = require('http');
mongoose.connect('mongodb://localhost/Electronic');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '10mb'}));
app.use(cors({origin:'http://localhost:4200'}))
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, browser_id");
 next();
});
require("./api/router")(app);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
console.log('your server will be started');
