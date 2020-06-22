const express = require('express');
const bodyParser = require('body-parser');
const port = 8080;
const app = express();
const users = require('./routes/users')
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// middleware
app.use('/users', users)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

verifyToken = (req, res, next) => {
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
    });
};

app.listen(port, function() {
    console.log('listening on port', port)
})


module.exports = app;