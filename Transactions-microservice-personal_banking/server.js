var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  TransactionDetails = require('./api/models/Transaction'),
  bodyParser = require('body-parser'),
  path = require('path'),
  cors = require('cors');


app.use(express.static(__dirname + '/public'));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://18.207.216.241:27017/personal_banking'); 

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/TransactionRoutes');
routes(app);
app.listen(port);


console.log('RESTful API server started on: ' + port);