/** @license
 * Copyright 2015 - present The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";

var router = require('express').Router();

router.use('/f1', require('./f1'));
// router.use('/f2', require('./f2'));

router.get('/', function(req, res) {
    res.render('index.html', {
        title : 'aaaa',
        abc : '111'
  });
});

router.get('/test', function(req, res) {
    res.render('test.html', {
        title : 'test',
        abc : '111'
    });
});

module.exports = router;