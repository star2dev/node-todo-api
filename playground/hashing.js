const {SHA256} = require('crypto-js'),
  jwt = require('jsonwebtoken'),
  bcrypt = require('bcryptjs');

var password = 'asdlkj123!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log('Hash: ', hash);
//   });
// });

var hashedPassword = '$2a$10$MFSbSH1xK3CLEgXvWcOnGuddY0E7YX2rqeRelYIxFzl1NHb3oOGHi';

bcrypt.compare(password, hashedPassword, (err,  res) => {
  console.log(res);
});

// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, 'salt-value');
// console.log(`Token: ${token}`);
//
// var decoded = jwt.verify(token, 'salt-value');
// console.log('Decoded', decoded);

// var message = 'I am Brutelax';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'my-secret-salt').toString()
// };
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'my-secret-salt').toString();
//
// if (resultHash === token.hash) {
//   console.log('Data not changed');
// } else {
//   console.log('Data modified ... Discard!');
// }
