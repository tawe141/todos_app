var express = require('express')
// import database file
var database = require('./database.json')
// used to parse body from requests
var bodyParser = require('body-parser')
// easier directory path manipulation
var path = require('path')
var app = express()

// parse JSON data being sent in
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'base.html'))
})

// GET request: return data from database in JSON format
app.get('/tasks', function(req, res) {
    res.json(database)
})

// POST request: append new data onto database, then overwrite old database
app.post('/tasks', function(req, res) {
    // database[(Object.keys(database).length + 1).toString()] =
    console.log(req.body);
})

app.listen(3000, function() {
    console.log('Listening on port 3000...');
})
