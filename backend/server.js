require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', api);

app.listen(process.env.PORT || 3000);