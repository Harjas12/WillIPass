const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');

const app = express();

// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', api);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`listening on port ${port}`)
});