  // SERVER-SIDE JAVASCRIPT

  // require Express, create an Express app
    var express = require('express'),
      app = express(),
      bodyParser = require('body-parser');

  // serve the public directory as a static file directory
  app.use(express.static('public'));

  // configure body parser (for receiving text form data)
  app.use(bodyParser.urlencoded({ extended: true }));

  //import controllers
  var controllers = require('./controllers');



  // add a route so your server will respond to GET / by serving index.html
  app.get('/', function homepage (req, res) {
    res.sendFile('views/index.html', { root : __dirname });
  });

  app.get('/api', controllers.api.index);
  app.get('/api/todos', controllers.todos.index);
  app.get('/api/todos/:todo_id', controllers.todos.show);

  app.post('/api/todos', controllers.todos.create);
  app.put('/api/todos/:todo_id', controllers.todos.update);

  app.delete('/api/todos/:todo_id', controllers.todos.destroy);

  // add a route so server will to respond to Ajax request and serve the front end with db data
  app.get('/api/lists', controllers.lists.index);
  app.get('/api/lists/:listName', controllers.lists.show);

  app.post('/api/lists', controllers.lists.create);
  app.put('/api/lists/:list_id', controllers.lists.update);

  app.delete('/api/lists/:list_id', controllers.lists.destroy);


  // tell the app to listen on a port so that the server will start
  app.listen(process.env.PORT || 3000, function () {
    console.log('Express server is running on http://localhost:3000/');
  });
