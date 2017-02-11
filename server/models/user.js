const mongoose = require('mongoose'),
  validator = require('validator'),
  jwt = require('jsonwebtoken'),
  _ = require('lodash');

var UserSchema = new mongoose.Schema({
    email: {
      type: String,
      validate: {
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email'
      },
      required: true,
      minLength: 1,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    tokens: [{
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }]
});

UserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email']);
}

UserSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, 'saltValue').toString();

  user.tokens.push({access, token});

  return user.save().then(() => {
    return token;
  });
}

UserSchema.statics.findByToken = function (token) {
  var User = this;
  var decoded;

  try {
    decoded = jwt.verify(token, 'saltValue');
  } catch (e) {
    return Promise.reject();
  }

  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
}

var User = mongoose.model('User', UserSchema);

module.exports = {User};
