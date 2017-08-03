
// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//requires models
var db = require("./models");

//sets up port & app
var PORT = process.env.PORT || 3000;

var app = express();

// serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + "/public"));

// sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//requires handlebars
var exphbs = require("express-handlebars");

//sets handlesbars as the main view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//requires routes
var burgerRoutes = require("./controllers/burgers_controller.js");

//gives server access to routes
app.use(burgerRoutes);

//syncs sequelize models and starts app
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});