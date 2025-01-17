var express = require('express');
var app = express();
require('dotenv').config();
var bodyParser = require('body-parser');

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
/* app.use(function(req, res, next) {
  let logger = req.method + ' ' + req.path + ' - ' + req.ip;
  console.log(logger);
  next();
}); */

/**
 * TODO: In the route app.get('/now', ...) chain a middleware function and the final handler. In the middleware function you should add the current time to the request object in the req.time key. You can use new Date().toString(). In the handler, respond with a JSON object, taking the structure {time: req.time}.
 * Note: The test will not pass if you don’t chain the middleware. If you mount the function somewhere else, the test will fail, even if the output result is correct.
 */
/* app.get('/now', function(req, res, next){
  req.time = new Date().toString();
  res.get(req.time);
  next();
}, function(req, res){
  res.json({
    time: req.time
  });
}); */

/**
 * TODO: Build an echo server, mounted at the route GET /:word/echo. Respond with a JSON object, taking the structure {echo: word}. You can find the word to be repeated at req.params.word. You can test your route from your browser's address bar, visiting some matching routes, e.g. your-app-rootpath/freecodecamp/echo.
 */
app.get('/:word/echo', function(req, res, next) {
  res.json({
    echo: req.params.word
  });
  next();
});

/**
 * TODO: Build an API endpoint, mounted at GET /name. Respond with a JSON document, taking the structure { name: 'firstname lastname'}. The first and last name parameters should be encoded in a query string e.g. ?first=firstname&last=lastname.
 * Note: In the following exercise you are going to receive data from a POST request, at the same /name route path. If you want, you can use the method app.route(path).get(handler).post(handler). This syntax allows you to chain different verb handlers on the same path route. You can save a bit of typing, and have cleaner code.
 */
/* const getName = (req, res, next) => {
  let firstName = req.query.first;
  let lastName = req.query.last;
  res.json({
    name: `${firstName} ${lastName}`
  });
  next();
};

app.route('/name').get(getName).post(getName); */

/**
 * TODO: Install the body-parser module in your package.json. Then, require it at the top of the file. Store it in a variable named bodyParser. The middleware to handle urlencoded data is returned by bodyParser.urlencoded({extended: false}). Pass to app.use() the function returned by the previous method call. As usual, the middleware must be mounted before all the routes which need it.
 * Note: extended=false is a configuration option that tells the parser to use the classic encoding. When using it, values can be only strings or arrays. The extended version allows more data flexibility, but it is outmatched by JSON.
 */
/* app.use(bodyParser.urlencoded({extended: false})); */

/**
 * TODO: Mount a POST handler at the path /name. It’s the same path as before. We have prepared a form in the html frontpage. It will submit the same data of exercise 10 (Query string). If the body-parser is configured correctly, you should find the parameters in the object req.body.
 * Respond with the same JSON object as before: {name: 'firstname lastname'}. Test if your endpoint works using the html form we provided in the app frontpage.
 */
app.use(bodyParser.urlencoded({extended: false}));

app.post('/name', (req, res, next) => {
  let firstName = req.body.first;
  let lastName = req.body.last;
  res.json({
    name: `${firstName} ${lastName}`
  });
  next();
});

module.exports = app;
