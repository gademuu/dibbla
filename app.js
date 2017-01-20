'use strict'
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(__dirname + '/node_modules'))
app.use(express.static(__dirname + '/public'))


app.get('/', (req, res) => {
  res.redirect('index.html')
})

app.listen(3000, '0.0.0.0', function() {
})

module.exports = app

