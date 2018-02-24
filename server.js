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
    name: "yoda",
    phoneNumber: "111-1111",
    email: "yoda@email.com",
    uniqueID: 1,
  },
  {
    name: "darthmaul",
    phoneNumber: "222-2222",
    email: "darthmaul@email.com",
    uniqueID: 2,
  },
  {
    name: "obiwankenobi",
    phoneNumber: "333-3333",
    email: "obiwankenobi@email.com",
    uniqueID: 3,
  }
];

// Routes
// =============================================================
// Search for specific customer (or all customer) - provides JSON
app.get("/api/:tables?", function(req, res) {
  var chosen = req.params.customers;

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