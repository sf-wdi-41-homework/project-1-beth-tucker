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

  //Database: hard-coded
  var todos = [
    { _id: 7, task: 'Laundry', description: 'Wash clothes' },
    { _id: 27, task: 'Grocery Shopping', description: 'Buy dinner for this week' },
    { _id: 44, task: 'Homework', description: 'Make this app super awesome!' }
  ];


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






  // tell the app to listen on a port so that the server will start
  app.listen(process.env.PORT || 3000, function () {
    console.log('Express server is running on http://localhost:3000/');
  });
