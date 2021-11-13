const findUserByUsername = require('./findUserByUsername');
const userTweets = require('./userTweets');

module.exports = [].concat(
  findUserByUsername,
  userTweets,
);
