// SERVER-SIDE JAVASCRIPT

// require Express, create an Express app
var express = require('express');
var app = express();

// serve the public directory as a static file directory
app.use(express.static('public'));

// add a route so your server will respond to GET / by serving index.html
app.get('/', function homepage (req, res) {
  res.sendFile('views/index.html', { root : __dirname });
});







// tell the app to listen on a port so that the server will start
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
