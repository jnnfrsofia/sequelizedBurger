//dependencies
var express = require('express');
var router = express.Router();

//import models
var db = require('../models');

//CREATE ROUTES

//get route that redirects users form index page to main burgers page
router.get('/', function(req, res) {
    res.redirect('/burgers');
});

//get route that selects all burgers from DB and displays burger data on main page    
router.get('/burgers', function(req, res) {   
        db.Burger.findAll({

        }).then(function(allBurgers) {

        //creates burger object variable that holds all burger data from DB
        var brgObject = {
            burgers: allBurgers
        };

        // console.log(brgObject);
        //sends the brgObject to the index page
        res.render('index', brgObject);
    });
});

//post route that inserts a new burger into the DB
router.post('/burgers/create', function(req, res) {
    //uses the create function from models to add new burger to DB
    return db.Burger.create ({
         //sets the burger name the user entered as the DB burger name
        burger_name: req.body.burgerName
    }).then(function() {
        //redirects this burger name to main burgers page
        res.redirect('/burgers');
    });

});

//put route that changes the condition of the burger from not devoured to devoured
router.put("/burgers/devour/:id", function(req, res) {
        return db.Burger.update({
            devoured: req.body.devoured
        }, {
            where: {
                id: req.params.id
            }
    
    }).then(function() {
        res.redirect("/burgers");
    });

});

//delete route that removes a burger from the DB and the main burgers page
router.delete('burgers/delete/:id', function(req, res) {
 return db.Burger.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect("/burgers");
    });

});

//export router for server.js
module.exports = router;