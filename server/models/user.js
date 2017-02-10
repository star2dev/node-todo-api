var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    validate: {
      validator: (v) => {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
      },
      message: '{VALUE} is not a valid email'
    },
    required: true,
    minLength: 1,
    trim: true
  }
});

module.exports = {User};

// var newUser = new User({
//   email: 'bruce.galpin@gmail.com'
// });
//
// newUser.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save User');
// });
