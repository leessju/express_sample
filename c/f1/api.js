"use strict";

var express = require('express');
var router = express.Router();

router.get('/a1', function(req, res) {

    var response = { a:1, b:2 };
    res.json(response);
});

router.get('/a2', function(req, res) {

    var response = {};
    response = { a:3, b:4 };
    setTimeout(() => res.json(response), 0);
});

module.exports = router;