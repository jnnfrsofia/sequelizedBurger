//dependencies
var express = require('express');
var router = express.Router();

//import models
var burger = require('../models/burger.js');

//CREATE ROUTES

//get route that selects all burgers from DB and displays burger data on main page
router.get('/', function(req, res) {
    //uses findAll function from models
    burger.findAll(function(data) {
        //creates burger object variable that holds all burger data from DB
        var brgObject = {
            burgers: data
        };

        console.log(brgObject);
        //sends the brgObject to the index page
        res.render('index', brgObject);
    });
});

//post route that inserts a new burger into the DB
router.post('/burgers', function(req, res) {
    //uses the createNew function from models to add new burger to DB
    burger.createNew([
        'burger_name'
    ], [
        //sets the burger name the user entered as the DB burger name
        req.body.burger_name
    ], function(data) {
        //redirects this burger name to the main index page
        res.redirect('/');
    });
});

//put route that changes the condition of the burger from not devoured to devoured
router.put('/burgers/:id', function(req, res) {
    //creates variable for the burger's ID so we can refer to it below in the updateOne function
    var condition = 'id ' + req.params.id;
    //uses the updateTable function from models to change the burger's status
    burger.updateTable({
        devoured: true
    }, condition, function(data) {
        //redirects the now devoured burger to the main index page
        res.redirect('/');
    });
});

//export router for server.js
module.exports = router;