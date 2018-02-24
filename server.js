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
    phone number: "111-1111",
    email: "yoda@email.com",
    unique ID: 1,
  },
  {
    name: "darthmaul",
    phone number: "222-2222",
    email: "darthmaul@email.com",
    unique ID: 2,
  },
  {
    name: "obiwankenobi",
    phone number: "333-3333",
    email: "obiwankenobi@email.com",
    unique ID: 3,
  }
];

// Routes
// =============================================================