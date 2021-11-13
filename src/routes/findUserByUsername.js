const axios = require('axios');
require('dotenv').config();

module.exports = {
  method: 'GET',
  path: '/users/by/username',
  handler: async (req) => {
    try {
      const options = {
        method: 'GET',
        url: `https://api.twitter.com/2/users/by/username/${req.query.username}`,
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        },
      };
      const result = await axios(options);
      return result.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};
