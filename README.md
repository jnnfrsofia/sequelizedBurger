# Eat-Da-Burger!
A burger eating application that uses Node.js/Express/MySQL/Handlebars/Materialize.

## Overview

This web application uses HTML/CSS and Materialize on the front end and Node.js and Express on the back end. The HTML templates are created with Handlebars.

The user can choose to enter a new burger name to the app or to click an already existing burger from the available burgers on the left side of page (pulled from the MySQL database). If the user adds a new burger, this burger is added to both the existing MySQL database and the home page via a new burger button. If the user clicks one of the available burgers, the burger's status now changes from available to devoured in the MySQL database, and moves from the left to the right column.

## Demo

The demo of the burger eating application can be found [here](https://eat-da-brgr.herokuapp.com).

## Installation

To run the application locally, clone this repository using the below command.

	git clone https://github.com/jnnfrsofia/burger.git
	
After cloning the repo, install the NPMs to your repo folder.

	cd burger
	npm install
	
Now you can run the node server locally.

	node server.js
	
Finally, open the local application on port 3000 at the URL: `http://localhost:3000/`.


