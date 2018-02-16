var mongoose = require('mongoose');

//name schema

var nameSchema = mongoose.Schema({
    Name: {
        type: String
    },
    Gender: {
        type: String
    },
    id: Number
});

const Name = module.exports = mongoose.model('Name', nameSchema);

//get names function 

module.exports.getNames = function(callback) {
    Name.find(callback);
}

//add names

module.exports.addName = function(name, callback) {
    Name.create(name, callback);
}