const express = require("express");
const router = express.Router();
const db = require("../db");
const sqlite3 = require("sqlite3").verbose();
var jwt = require("jsonwebtoken");
var crypto = require('crypto');

let sha512 = function(password, salt){
	var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
	hash.update(password);
	var value = hash.digest('hex');
	return {
		salt : salt,
		passwordHash : value
	};
  };

router.post("/auth/signup", (req, res, next) => {
	req.body = JSON.parse(JSON.stringify(req.body));
	console.log(req.body);
	db("users")
    .insert(req.body)
    .then(function (userID) {
      return db("users").select().where("userID", parseInt(userID)).first();
    })
    .then(function (show) {
      res.status(200).json(show);
    })
})

router.post("/auth/signin", (req, res, next) => {
	req.body = JSON.parse(JSON.stringify(req.body));
	console.log(req.body);
	db("users")
		.select()
		.where("username", req.body.username)
		.first()
		.then(function (user) {
			const salt = user.salt;
			const encrypt = sha512(req.body.password, salt)
			if (encrypt === user.crypt_password){
				var token = jwt.sign({ id: user.id }, config.secret, {
					expiresIn: 86400 // 24 hours
				});
			
				res.status(200).send({
					id: user.id,
					username: user.username,
					email: user.email,
					accessToken: token
				});
			}else{
				throw error
			}
		})
    .catch(function (error) {
      res.status(403).send('access denied')
      console.log('wrong password or username');
    });
})

router.get("/test/user", (req, res, next) => {
	let token = req.headers["x-access-token"];

	if (!token) {
		return res.status(403).send({
		message: "No token provided!"
		});
	}

	jwt.verify(token, config.secret, (err, decoded) => {
		if (err) {
		return res.status(401).send({
			message: "Unauthorized!"
		});
		}
		req.userId = decoded.id;
		next();
	}),
    res.status(200).send("User Content.");
})

module.exports = router;