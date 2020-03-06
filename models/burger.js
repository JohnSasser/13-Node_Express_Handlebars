// ***6 import our ORM and use it's methods to create even more SPECIFIC methods to query the burger table

//example: burger.selectAll calls orm.selectAll("burgers")
const orm = require("./orm.js");

const burgerModel = {
	selectAll: function() {
		return orm.selectAll("burgers");
	}
};



// on saturday the 29th of feb