
'use strict';
let fs = require('fs');
// [START functions_helloworld_http]
const escapeHtml = require('escape-html');

let jsonObject = JSON.parse(fs.readFileSync('jsonUser.json', 'utf8'));

// [END functions_helloworld_http]

// [START functions_helloworld_get]

exports.user = (req, res) => {
  let userId = req.body.userId;
  res.send(jsonObject);
};
// [END functions_helloworld_get]
