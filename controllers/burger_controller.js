// THE CONTROLLER IS THE ROUTER FILE;

const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
	burger.all(data => {
		// what is the burger object?????
		let AllBurgers = {
			burgers: data
		};
		// console.log(AllBurgers);
		res.render("index", AllBurgers);
	});
});

// ROUTES NEEDED :

// creates a new burger / burgerRow;

// where are the req, and res coming from??????
router.post("/api/burgers", (req, res) => {
	// coming from the front-end, burger being created, going to the sql server;

	burger.create([req.body.burger_name], function(result) {
		res.redirect("/");
	});
});

// the put updates the burgerRow;
// what is the /:id doing in this, looking for a id in an object, or is it just a route?????

//
router.put("/api/burgers/:id", (req, res) => {
	let condition = req.params.id;

	console.log(`condition: `, condition);

	burger.update(condition, () => {
		res.status(200).end();
	});
});

router.delete("/api/burgers/:id", (req, res) => {
	let condition = req.params.id;

	burger.delete(condition, () => {
		res.status(200).end();
	});
});

module.exports = router;
