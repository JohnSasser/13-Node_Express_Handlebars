// Set up MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "burger_db"
});

// Make connection.
connection.connect(err => {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.

module.exports = connection;

// to check if the app is connected to MySql;

// open terminal in the connection.js file and run
// node connection
// should return the connection.threadId;
