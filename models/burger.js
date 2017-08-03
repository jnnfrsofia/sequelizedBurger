//requires orm object from orm.js
var orm = require('../config/orm.js');

var burger = {
    // select all burgers from the DB table
    findAll: function(callback) {
        orm.findAll('burgers', function(res) {
            callback(res);
        });
    },

    // the variables cols and vals are arrays
    createNew: function(cols, vals, callback) {
        orm.createNew('burgers', cols, vals, function(res) {
            callback(res);
        });
    },

    // the objColVals is an object specifying columns as object keys with associated values
    updateTable: function(objColVals, condition, callback) {
        orm.updateTable('burgers', objColVals, condition, function(res) {
            callback(res);
        });
    }
};


//exports burger function for future use in other models
module.exports = burger;