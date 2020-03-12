//  ***2

//create an object with some really basic CRUD methods that use connection.query() to query the database
//at the very least we need to be able to Create burgers, Update burgers (true or false eaten column) and Read burgers to get the list

function printQuestionMarks(num) {
	let arr = [];

	for (let i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

let connection = require("../config/connection");

//example:
const orm = {
	// tablename is going to be the burger_db.burger

	// selectAllORM: method that will select all tables/burgers from the db;
	selectAllORM: function(tablename, cb) {
		let queryStatement = "SELECT * FROM " + tablename + ";";
		connection.query(queryStatement, (err, result) => {
			if (err) {
				throw err;
			}
			// console.log(result);
			cb(result);
		});
	},
	// still need other methods to select other things;

	// INSERT: method that will insert a new burger into the burgers_db;

	// vals is [req.body.burger_name];
	createORM: function(tablename, column, vals, cb) {
		let queryStatement = "INSERT INTO " + tablename;
		queryStatement += " (";
		queryStatement += column.toString();
		queryStatement += ") ";
		queryStatement += "VALUES (";

		// helper-function that adds the question marks for values to the string.
		queryStatement += printQuestionMarks(vals.length);
		queryStatement += ") ";

		// console.log("createORM:", queryStatement);

		// connection is the thing that sends the queryStatement request over to the sql.db
		connection.query(queryStatement, vals, (err, result) => {
			console.log(vals);
			if (err) {
				throw err;
			}
			// console.log(result);
			cb(result);
		});
	},

	// *****needsDoing
	// UPDATE: method that will replace a burger state;
	updateORM: function(tableID, cb) {
		let queryStatement = `UPDATE burgers SET devoured = 1 WHERE ID = '${tableID}'`;

		console.log(tableID);

		connection.query(queryStatement, (err, result) => {
			if (err) {
				throw err;
			}
			// console.log(result);
			cb(result);
		});
	},

	deleteORM: function(rowID, cb) {
		let queryStatement = `DELETE FROM burgers WHERE ID = '${rowID}'`;
		console.log(queryStatement);
		connection.query(queryStatement, rowID, (err, result) => {
			if (err) {
				throw err;
			}
			console.log("deleteORM:", result);
			// console.log("deleteORM:", queryStatement);

			cb(result);
		});
	}
};

module.exports = orm;
