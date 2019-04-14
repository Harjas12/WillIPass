const express = require('express');
const pg = require('pg');
const router = express.Router();

const dbConn = new pg.Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASS,
	port: process.env.DB_PORT
});

router.post('/create', async (req, res) => {
	let username = req.body.username;
	let password = req.body.password;
	if(!username || !password) {
		res.send(400);
		return;
	}
	res.send("test");
});

module.exports = router;