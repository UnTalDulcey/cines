var express = require('express');
var routes = require('./routes/index');
var bodyParser = require('body-parser');
var logger = require('./logger');
var server = express();
// parse application/json
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }));
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var port = process.env.PORT || 8080;
// view engine setup
server.use('/', routes);
server.use(express.static(__dirname + '/public'));
server.set('views', __dirname + '/views')
server.set('view engine', 'jade');
server.engine('jade', require('jade').__express);
var server = server.listen(port, function () {
  var port = server.address().port;

  logger.info('Server in http://localhost:%s/', port);
});

module.exports = server;
