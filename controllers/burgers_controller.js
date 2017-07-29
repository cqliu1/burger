const Burger = require("../models/Burger.js");

let Router = function(app) {

	app.get("api/all", function(req,res) {
		Burger.selectAll(function(result) {
			res.json(result);
		});
	});

	app.post("api/new", function(req,res) {
		let newBurger = req.body;
		Burger.insertOne(newBurger, function(result) {
			res.json(result);
		});
	});

	app.put("api/update", function(req,res) {
		let updateBurger = req.body;
		Burger.updateOne(updateBurger, function(result) {
			res.json(result);
		})
	});
};

module.exports = Router;