var express = require('express');
var app = express();

// TODO: Log "Hello World" to the console.
// console.log("Hello World");

// TODO: Use the app.get() method to serve the string "Hello Express" to GET requests matching the / (root) path. Be sure that your code works by looking at the logs.
app.get("/", (req, res) => {
  res.send("Hello Express");
});

module.exports = app;
