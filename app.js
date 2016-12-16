'use strict';
const express = require('express');
const app = express();

module.exports = app;

app.use(express.static(__dirname + '/app'));

app.listen(8000, '0.0.0.0', function() {
  console.log("server starting on port 8000");
});
