var express = require('express')
var database = require('database.json')
var app = express()

app.get('/', function(req, res) {
    res.sendFile('base.html')
})

app.get('/tasks', function(req, res) {
    res.json(database)
})

app.post('/tasks', function(req, res) {
    
})

app.listen(3000, function() {
    console.log('Listening on port 3000...');
})
