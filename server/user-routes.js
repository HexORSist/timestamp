var express = require('express'),
    _       = require('lodash'),
    userSV  = require('./user.server');

var app = module.exports = express.Router();

app.get('/', function(req, res) {
  return res.status(200).sendFile(process.cwd() + "/public/index.html");
});

app.get('/:date', function(req, res) {

  return res.status(200).send(userSV.digesttime(req.params.date));

});
