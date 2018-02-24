// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// Hot-Restaurant Characters (DATA)
// =============================================================
var customers = [
  {
    routeName: "yoda",
    name: "yoda",
    phoneNumber: "111-1111",
    email: "yoda@email.com",
    uniqueID: 1,
  },
  {
    routeName: "darthmaul",
    name: "darthmaul",
    phoneNumber: "222-2222",
    email: "darthmaul@email.com",
    uniqueID: 2,
  },
  {
    routeName: "obiwankenobi",
    name: "obiwankenobi",
    phoneNumber: "333-3333",
    email: "obiwankenobi@email.com",
    uniqueID: 3,
  }
];

// Routes
// =============================================================
// Basic route that sends the user first to the AJAX Page
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "views.html"));
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "/reservation.html"));
});

// Get all characters
app.get("/all", function(req, res) {
  res.json(customers);
});

// Search for specific customer (or all customer) - provides JSON
app.get("/api/:tables?", function(req, res) {
  var chosen = req.params.tables;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < customers.length; i++) {
      if (chosen === customers[i].routeName) {
        return res.json(customers[i]);
      }
    }
    return res.json(false);
  }
  return res.json(customers);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newcustomer = req.body;
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  //newcustomer.routeName = newcustomer.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcustomer);

  customers = customers.concat(newcustomer);

  res.json(customers);
});