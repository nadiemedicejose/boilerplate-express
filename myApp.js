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
app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({
      message: "Hello json".toUpperCase()
    });
  } else {
    res.json({
      message: "Hello json"
    });
  }
});

module.exports = app;
