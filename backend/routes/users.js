const express = require("express");
const router = express.Router();
const db = require("../db");
const sqlite3 = require("sqlite3").verbose();

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
})

router.post("/auth/signin", (req, res, next) => {
	
})

router.get("/test/all", (req, res, next) => {
	
})

router.get("/test/user", (req, res, next) => {
	
})

router.get("/test/mod", (req, res, next) => {
	
})

router.get("/test/admin", (req, res, next) => {
	
})

router.get("/test/all", (req, res, next) => {
	
})
router.put("/update/:id", function (req, res, next) {
	req.body = JSON.parse(JSON.stringify(req.body));
	console.log(req.body);
	if (req.body.hasOwnProperty("userID")) {
		return res.status(422).json({
			error: "You cannot update the ID field",
		});
	}
});

module.exports = router;