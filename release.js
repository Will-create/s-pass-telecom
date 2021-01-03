// ===================================================
// FOR PRODUCTION
// Total.js - framework for Node.js platform
// https://www.totaljs.com
// ===================================================

var fs = require('fs');
var options = {};
options.ip = 'auto';
options.port = process.env.PORT;
var framework = require('total.js');
framework.https('release', options);
