require('dotenv').config();

const express = require('express');
const pg = require('pg');
const encrypter = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

const dbConn = new pg.Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASS,
	port: process.env.DB_PORT
});

function checkAuth(req, res, next) {
	let token = req.headers['authorization'];
	console.log(req.headers);
	if(!token) {
		res.status(401).send({ auth: false, message: 'No token provided.' });
		return;
	}
	token = token.substring(7);
	try {
		let jwtToken = jwt.verify(token, process.env.SECRET);
		req.user_id = jwtToken.id;
		next();
	} catch(error) {
		res.sendStatus(401);
		return;
	}
}

router.get('/test', checkAuth, (req, res) => {
	res.send("HELLO");
});

router.post('/create', async (req, res) => {
	let username = req.body.username;
	let password = req.body.password;
	if(!username || !password) {
		res.sendStatus(400);
		return;
	}
	let salt = await encrypter.genSalt();
	let hash = await encrypter.hash(password, salt);
	try {
		let results = await dbConn.query("INSERT INTO account (username, password, salt) VALUES ($1, $2, $3)",
		[username, hash, salt]);
		res.sendStatus(201);
	} catch(error) {
		console.log(error);
		res.sendStatus(400);
	}
});

router.post('/login', async (req, res) => {
	let username = req.body.username;
	let password = req.body.password;
	if(!username || !password) {
		res.sendStatus(400);
		return;
	}
	try {
		let queryRes = await dbConn.query("SELECT password, salt, user_id FROM account WHERE username = $1",
		[username]);
		if(queryRes.rowCount != 1) {
			res.sendStatus(401);
			return;
		}
		let authInfo = queryRes.rows[0];
		let recievedHash = await encrypter.hash(password, authInfo.salt);
		if(recievedHash == authInfo.password) {
			let token = jwt.sign({id: authInfo.user_id}, process.env.SECRET);
			res.send({auth: true, token: token});
		} else {
			res.sendStatus(401);
		}
	} catch(error) {
		res.sendStatus(401);
	}
});

module.exports = router;