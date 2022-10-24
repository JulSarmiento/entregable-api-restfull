const express = require('express');
const app = express();
const indexRouter = require('./src/routers/');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/public', express.static(__dirname + '/public'));
app.use('/api', indexRouter);

module.exports = app;

