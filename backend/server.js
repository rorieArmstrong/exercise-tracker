const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
const app = express();
const users = require('./routes/users')
const sqlite3 = require('sqlite3').verbose()
const cors = require('cors')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// middleware
app.use('/users', users)


app.listen(port, function() {
    console.log('listening on port', port)
})


module.exports = app;