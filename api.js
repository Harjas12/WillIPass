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
	console.log(req.headers);
	let token = req.headers['authorization'];
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

router.get('/grades', checkAuth, async (req, res) => {
	let id = req.user_id;
	try {
		let results = await dbConn.query("SELECT classes FROM account WHERE user_id = $1", [id]);
		res.send(results.rows);
	} catch(error) {
		res.sendStatus(400);
	}
});

router.post('/grades', checkAuth, async (req, res) => {
	let id = req.user_id;
	let grades = req.body.grades;
	if(!grades) {
		res.sendStatus(400);
		return;
	}
	try {
		await dbConn.query("UPDATE account SET classes = $1 WHERE user_id = $2", [grades, id]);
		res.sendStatus(204);
	} catch(error) {
		res.sendStatus(500);
	}
});

router.post('/create', async (req, res) => {
	let username = req.body.username;
	let password = req.body.password;
	let firstName = req.body.firstname;
	let lastName = req.body.lastname;
	console.log(req.body);
	if(!username || !password || !firstName || !lastName) {
		res.sendStatus(400);
		return;
	}
	let salt = await encrypter.genSalt();
	let hash = await encrypter.hash(password, salt);
	try {
		let results = await dbConn.query("INSERT INTO account (username, password, salt, firstname, lastname) VALUES ($1, $2, $3, $4, $5)",
		[username, hash, salt, firstName, lastName]);
		res.sendStatus(204);
	} catch(error) {
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
		let queryRes = await dbConn.query("SELECT password, salt, user_id, firstname, lastname FROM account WHERE username = $1",
		[username]);
		if(queryRes.rowCount != 1) {
			res.sendStatus(401);
			return;
		}
		let authInfo = queryRes.rows[0];
		let recievedHash = await encrypter.hash(password, authInfo.salt);
		if(recievedHash == authInfo.password) {
			let token = jwt.sign({id: authInfo.user_id}, process.env.SECRET);
			res.send({auth: true, token: token, firstName: authInfo.firstname, lastname: authInfo.lastname});
		} else {
			res.sendStatus(401);
		}
	} catch(error) {
		res.sendStatus(401);
	}
});

module.exports = router;