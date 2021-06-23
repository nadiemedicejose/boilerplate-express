var express = require('express');
var app = express();

// TODO: Log "Hello World" to the console.
// console.log("Hello World");

// TODO: Use the app.get() method to serve the string "Hello Express" to GET requests matching the / (root) path. Be sure that your code works by looking at the logs.
/* app.get("/", (req, res) => {
  res.send("Hello Express");
}); */

/**
 * TODO: Send the /views/index.html file as a response to GET requests to the / path. If you view your live app, you should see a big HTML heading (and a form that we will use later…), with no style applied.
 * NOTE: Express evaluates routes from top to bottom, and executes the handler for the first match. You have to comment out the preceding solution, or the server will keep responding with a string.
 */
index = __dirname + "/views/index.html";
app.get("/", function(req, res) {
  res.sendFile(index);
});

module.exports = app;
