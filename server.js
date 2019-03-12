// Pull in required dependencies
var express = require('express');
var path = require('path');

// Configure the Express application
var app = express();
var PORT = process.env.PORT || 8080;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Start listening on PORT

  app.listen(PORT, function() {
    console.log("App listening on localhost:" + PORT);
});