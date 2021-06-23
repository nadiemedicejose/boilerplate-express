var express = require('express');
var app = express();
require('dotenv').config();

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

/**
 * TODO: Mount the express.static() middleware to the path /public with app.use(). The absolute path to the assets folder is __dirname + /public.
 * Now your app should be able to serve a CSS stylesheet. Note that the /public/style.css file is referenced in the /views/index.html in the project boilerplate. Your front-page should look a little better now!
 */
public = __dirname + "/public";
app.use("/public", express.static(public));

/**
 * TODO: Serve the object {"message": "Hello json"} as a response, in JSON format, to GET requests to the /json route. Then point your browser to your-app-url/json, you should see the message on the screen.
 */
/* app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });
}); */

/**
 * Let's add an environment variable as a configuration option.
 * TODO: Create a .env file in the root of your project directory, and store the variable MESSAGE_STYLE=uppercase in it.
 * TODO: Then, in the /json GET route handler you created in the last challenge, transform the response object's message to uppercase if process.env.MESSAGE_STYLE equals uppercase. The response object should either be {"message": "Hello json"} or {"message": "HELLO JSON"}, depending on the MESSAGE_STYLE value.
 * Note: If you are using Replit, you cannot create a .env file. Instead, use the built-in SECRETS tab to add the variable.
 */
/* app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({
      message: "Hello json".toUpperCase()
    });
  } else {
    res.json({
      message: "Hello json"
    });
  }
}); */

/**
 * TODO: Build a simple logger. For every request, it should log to the console a string taking the following format: "method path - ip". An example would look like this: "GET /json - ::ffff:127.0.0.1". Note that there is a space between method and path and that the dash separating path and ip is surrounded by a space on both sides. You can get the request method (http verb), the relative route path, and the caller’s ip from the request object using req.method, req.path and req.ip. Remember to call next() when you are done, or your server will be stuck forever. Be sure to have the ‘Logs’ opened, and see what happens when some request arrives.
 * Note: Express evaluates functions in the order they appear in the code. This is true for middleware too. If you want it to work for all the routes, it should be mounted before them.
 */
app.use(function(req, res, next) {
  let logger = req.method + ' ' + req.path + ' - ' + req.ip;
  console.log(logger);
  next();
});

module.exports = app;
