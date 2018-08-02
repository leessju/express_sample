
"use strict";

var express = require('express');
var app = express();

var PORT = 8005;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var cookieParser = require('cookie-parser');
app.use(cookieParser());

//app.set('view engine', 'html');
app.set('partials', {
    styles: 'styles'
    //material: 'material.css'
});

//app.enable('view cache');
app.engine('html', require('hogan-express'));
app.locals.delimiters = '<% %>';

// Static Content
app.use(express.static(__dirname + '/public'));

// Middleware
// app.use(require('./middlewares/amp-access-cors'));
// app.use(require('./middlewares/logging'));

// Controllers
app.use(require('./c'));

var port = process.env.PORT || PORT;
var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Publisher listening on: ', port);
});
