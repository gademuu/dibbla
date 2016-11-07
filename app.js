'use strict';
const express = require('express');

const app = express();

app.listen(8000, '0.0.0.0', function() {
  console.log("server starting on port 8000");
});