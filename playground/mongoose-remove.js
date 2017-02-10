const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose'),
      {Todo} = require('./../server/models/todo'),
      {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove();
// Todo.findByIdAndRemove();

// Todo.findByOneAndRemove({_id: '589debdbddfbd41d3fea0aa1'}).then((todo) => {
//   console.log(JSON.stringify(todo, undefined, 2));
// });

// Todo.findByIdAndRemove('589debdbddfbd41d3fea0aa1').then((todo) => {
//   console.log(JSON.stringify(todo, undefined, 2));
// });
