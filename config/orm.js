//requires the connection
var connection = require('./connection.js');

// helper function for generating MySQL syntax
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num.length; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// helper function for generating My SQL syntax
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        arr.push(key + "=" + ob[key]);
    }

    return arr.toString();
}

//create orm object that will create SQL queries
var orm = {
    //function that returns all rows from table
    findAll: function(tableInput, callBack) {
        // construct the query string that returns all rows from the target table
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        //database query function
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            //returns the callback result
            callBack(result);
        });
    },
    //function that creates a new table row
    createNew: function(table, cols, vals, callBack) {
        //constructs the query string that inserts the new table row
        var queryString = 'INSERT INTO ' + table;
        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        //database query function
        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            //returns the callback result
            callBack(result);
        });
    },

    //function that updates an existing table row
    updateTable: function(table, objColVals, condition, callBack) {
        //constructs the query string that updates a single table row
        var queryString = 'UPDATE ' + table;
        queryString += 'SET ';
        queryString += objToSql(objColVals);
        queryString += 'WHERE ';
        queryString += condition;


        //database query
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            //returns the callback result
            callBack(result);
        });
    }
};

//exports orm object for future use in other modules
module.exports = orm;