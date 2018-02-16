var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var router = express.Router();
var app = express();
var api = require('./server/routes/api');

Name = require('././models/names');
//model for mongoose schema

//connect to mongoose
mongoose.connect('mongodb://127.0.0.1/catnamegenerator');
console.log(mongoose.connection.readyState);
var db = mongoose.connection;

db.on('connected', function() {
    console.log('connected to db');
});
db.on('disconnected', function() {
    console.log('disconnected to db');
});

db.on('error', function(error) {
    console.log('db connection error', error);
});

process.on('SIGINT', function() {
    db.close(function() {
        console.log('db connection closed due to process termination');
        process.exit(0);
    });
});


// parsers for data

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Angular DIST output folder- look for the dist path
app.use(express.static(path.join(__dirname, 'dist')));

//API location
app.use('/api', api);

//send all other requests to the Angular app
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

app.get('/api/names', function(req, res) {
    // console.log(res);
    Name.getName(function(err, name) {
        // console.log(req.json)
        console.log(res)
        if (err) {
            throw err;
        }
        res.json(name);
    });
}, );


app.post('/api/names', function(req, res) {
    var name = req.body;

    Name.addName(name, function(err, name) {
        if (err) {
            throw err;
        }
        res.json(name);
    });
});


//server

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log('app is listening on :' +
    port));