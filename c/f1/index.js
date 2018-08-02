"use strict";

var express = require('express');
var router = express.Router();
// var app = express();

router.use('/api', require('./api'));
// router.use('/sample', require('./sample.js'));
// router.use('/demo', require('./demo.js'));
// router.use('/login', require('./login'));

var jsonTest = {
    items: [
        {
            title: "AMP YouTube Channel",
            url: "https://www.youtube.com/channel/UCXPBsjgKKG2HqsKBhWA4uQw"
        },
        {
            title: "AMPproject.org",
            url: "https://www.ampproject.org/"
        },
        {
            title: "AMP By Example",
            url: "https://ampbyexample.com/"
        },
        {
            title: "AMP Start",
            url: "https://ampstart.com/"
        }
    ]
};

router.get('/', function(req, res) {
    //res.redirect('../');
    var response = {};
    response = jsonTest;
    setTimeout(() => res.json(response), 0); // Simulate network delay.
});

router.get('/test', function(req, res) {
    //res.redirect('../');
    var response = {};
    response = jsonTest;
    setTimeout(() => res.json(response), 0); // Simulate network delay.
});

module.exports = router;