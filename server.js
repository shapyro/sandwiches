var express = require('express')
var methodOverride = require('method-override')
var app = express()
var bodyParser = require('body-parser')
var mysql = require("mysql"); 
var PORT = process.env.PORT || 8080;

app.use(methodOverride('X-HTTP-Method-Override'));
// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//  mySQL DB connection info
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 8889,
  password: "root",
  database: "*******"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});


// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
