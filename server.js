// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var colors = require("colors");
// Override the method of a request based on a the X-HTTP-Method-Override header or custom query/post parameter
var methodOverride = require("method-override");

// Create Express instance
var app = express();
var PORT = process.env.PORT || 8080;

// Expose folders to public to be accessed
app.use(express.static("public")) 

// Set up Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlerbars as default templating engine
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import Routes
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

// Start server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT ".magenta + PORT);
  });