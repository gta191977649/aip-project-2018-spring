// eslint-disable-next-line no-unused-vars
const Profile = require('../models/UserProfile');

module.exports.profiles_get = async (req, res) => {
  res.json({profiles: []});
};
