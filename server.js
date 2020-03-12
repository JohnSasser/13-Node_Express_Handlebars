//
//
//   USE FOLDER 16 AS P.O.R. FOR LAYOUT;
//
//

let express = require("express");

let PORT = process.env.PORT || 8080;

let app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let routes = require("./controllers/burger_controller");
app.use(routes);

app.listen(PORT, () => {
	console.log("App listening on PORT http://localhost:" + PORT);
});

// server goes to connection;
