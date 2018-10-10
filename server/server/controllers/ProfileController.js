// eslint-disable-next-line no-unused-vars
const Profile = require("../models/UserProfile");
const User = require("../models/Account");

const isEmpty = require("../utils/is-empty");
const validateProfile = require("../validation/validateProfile");
const validator = require("validator");
const jwt = require("jsonwebtoken");

module.exports.profiles_get = async (req, res) => {
  let errors = {};
  let handle = req.params.handle;

  if (isEmpty(handle)) {
    console.log("handle empty");
    errors.handle = "Handle is empty";
    res.status(400).json({ errors });
  }
  // Look for user matching handle
  let user = await User.findOne({ handle: handle });
  if (user) {
    // If User is Foud - Look for profile
    let profile = await Profile.findOne({ user: user._id }).populate("user");
    if (profile) {
      console.log("FOUND PROFILE FOR: " + handle);
      res.status(200).json({ profile });
    } else {
      // If Profile is not found respond with error
      console.log("NOT NOT FIND PROFILE FOR: " + handle);
      errors.handle = "Could not find profile, do you have one?";
      res.status(400).json({ errors });
    }
  } else {
    // If handle is not found
    errors.handle = "Handle not found";
    console.log("ERROR HANDLE NOT FOUND");
    return res.status(400).json({ errors });
  }
};

module.exports.profile_update = async (req, res) => {
  const { isValid, errors } = validateProfile(req.body);
  let token = req.headers.authorization;
  if (!token) {
    errors.auth = "not valid";
    res.status(401).json(errors);
  }
  let user = jwt.decode(token.split(" ")[1]);
  if (!isValid) {
    console.log("Not valid yo" + JSON.stringify(errors));
    return res.status(400).json({
      errors
    });
  }
  let userid = user.id;
  let id = req.body._id;
  let website = req.body.website;
  let description = req.body.description;
  let location = req.body.location;

  let profile = await Profile.findOne({ _id: id, user: userid });
  if (!profile) {
    errors.profile = "Profile not found, contact admin";
    res.status(404).json({ errors });
  }

  profile.website = validator.escape(website);
  profile.description = validator.escape(description);
  profile.location = validator.escape(location);
  profile.save();

  res.status(200).json({ profile });
};
