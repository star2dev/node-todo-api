var express = require('express'),
  bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose'),
  {Todo} = require('./models/todo'),
  {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

//GET /todos/ID

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
