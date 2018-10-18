const validator = require('validator');
const jwt = require('jsonwebtoken');

const Profile = require('../models/UserProfile');
const User = require('../models/User');
const Product = require('../models/Product');
const isEmpty = require('../utils/isEmpty');
const validateProfile = require('../validation/validateProfile');
const mongoNotConnected = require('../utils/checkMongooseConnection');
const Msg = require('../utils/constant');

module.exports.profiles_get = async (req, res) => {
  let errors = {};
  let handle = req.params.handle;

  if (isEmpty(handle)) {
    console.log('handle empty');
    errors.handle = Msg.HANDLE_EMPTY_ERROR;
    res.status(400).json({errors});
  }

  try {
    // Check if mongo is connected
    if (mongoNotConnected()) {
      errors.message = Msg.DATABASE_DISCONNECT_ERROR;
      return res.status(400).json({errors});
    }

    // Look for user matching handle
    let user = await User.findOne({handle: handle}).select(
        'name avatar handle'
    );

    if (user) {
      // If User is Foud - Look for profile
      let profile = await Profile.findOne({user: user._id});
      if (profile) {
        let products = await Product.find({seller: user._id});
        res.status(200).json({profile, user, products});
      } else {
        // If Profile is not found respond with error
        errors.handle = Msg.PROFILE_NOT_FIND_ERROR;
        res.status(400).json({errors});
      }
    } else {
      // If handle is not found
      errors.handle = 'Handle not found';
      return res.status(400).json({errors});
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.profile_update = async (req, res) => {
  const {isValid, errors} = validateProfile(req.body);

  let token = req.headers.authorization;
  if (!token) {
    errors.auth = Msg.INVAILD_ERROR;
    res.status(401).json(errors);
  }
  let user = jwt.decode(token.split(' ')[1]);
  if (!isValid) {
    return res.status(400).json({errors});
  }

  let userid = user.id;
  let id = req.body._id;
  let website = req.body.website;
  let description = req.body.description;
  let location = req.body.location;

  try {
    // Check if mongo is connected
    if (mongoNotConnected()) {
      errors.message = Msg.DATABASE_DISCONNECT_ERROR;
      return res.status(400).json({errors});
    }

    let profile = await Profile.findOne({_id: id, user: userid});
    if (!profile) {
      errors.profile = Msg.NO_PROFILE_ERROR;
      res.status(404).json({errors});
    }

    profile.website = validator.escape(website);
    profile.description = validator.escape(description);
    profile.location = validator.escape(location);
    profile.save();

    res.status(200).json({profile});
  } catch (error) {
    console.log(error);
  }
};
