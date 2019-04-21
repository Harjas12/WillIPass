const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');

const app = express();

// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
	next();
});

app.use('/api', api);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`listening on port ${port}`)
});