// ***6 import our ORM and use it's methods to create even more SPECIFIC methods to query the burger table

//example: burger.selectAll calls orm.selectAll("burgers")
const orm = require("../config/orm");

const burgerModel = {
	all: function(cb) {
		orm.selectAllORM("burgers", result => {
			cb(result);
		});
	},

	// CREATE{}
	// pass vals which holds
	create: function(vals, cb) {
		// inserting 'burgers' into tableName & col
		orm.createORM("burgers", "burger_name", vals, result => {
			cb(result);
		});
	},

	// *****needsDoing
	// UPDATE{}
	update: function(burgerID, cb) {
		orm.updateORM(burgerID, result => {
			// console.log(result.burgerID);

			cb(result);
		});
	},

	// DELETE MODEL
	delete: function(tableName, rowID, cb) {
		orm.deleteORM(tableName, rowID, function(result) {
			console.log(result);

			cb(result);
		});
	}
};

module.exports = burgerModel;
