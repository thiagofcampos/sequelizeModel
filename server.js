const express = require('express');
const Cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();

const API_PORT = process.env.API_PORT || 3333;

app.use(Cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

require('./routes/registerUser')(app);

app.listen(API_PORT, () => console.log(`ouvindo a porta ${API_PORT}`));

module.exports = app;

