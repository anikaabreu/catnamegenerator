//build a restful API that makes calls to the DB, then write out the CRUD to manipulate the data coming from the DB. this can be displayed inside the components like any other API data would be that would come from the internet instead 

var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');

// var connection = (closure) => {
//     return Mongo
// }



//connect to mongoose
mongoose.connect('mongodb://localhost/catnamegenerator');

var db = mongoose.connection;

router.get('/', (req, res) => {
    res.send('API WORKS')
});

module.exports = router;