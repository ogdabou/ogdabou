'use strict';

var express = require('express'),
  app = express(),
  logger = require('morgan');

app.use(logger('debug'));
app.use('/', express.static('static'));


var port = process.env.PORT || 8080;

app.listen(port);
module.exports = app;
