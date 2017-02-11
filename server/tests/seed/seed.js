const {ObjectID} = require('mongodb'),
      jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo'),
      {User} = require('./../../models/user');

const userOneId = new ObjectID(),
      userTwoId = new ObjectID();
const dummyUsers = [{
  _id: userOneId,
  email: 'bruce.galpin@gmail.com',
  password: 'asdlkj!',
  tokens: [{
    access: 'auth',
    token : jwt.sign({_id: userOneId, access: 'auth'}, 'saltValue').toString()
  }]
}, {
  _id: userTwoId,
  email: 'test@gmail.com',
  password: 'asdlkj!xx'
}];

const dummyTodos = [{
  _id: new ObjectID(),
  text: 'First test todo'
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 333
}];

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(dummyUsers[0]).save();
    var userTwo = new User(dummyUsers[1]).save();

    return Promise.all([userOne, userTwo]);
  }).then(() => done());
};

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(dummyTodos);
  }).then(() => done());
};

module.exports = {dummyTodos, populateTodos, dummyUsers, populateUsers};
