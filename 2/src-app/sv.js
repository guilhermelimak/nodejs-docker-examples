'use strict';

const express = require('express');

const PORT = 3000;

const app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
