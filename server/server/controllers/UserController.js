const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Profile = require('../models/UserProfile');
const validateRegister = require('../validation/validateRegister');
const validateLogin = require('../validation/validateLogin');
const mongoNotConnected = require('../utils/checkMongooseConnection');
const Msg = require('../utils/constant');
// @route POST api/auth/current
// @desc Gets current user details
// @access Private
module.exports.user_current = async (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
  });
};

// @route POST api/auth/register
// @desc Authenticates the user and returns user
// @access Public
module.exports.user_register = async (req, res) => {
  const {errors, isValid} = validateRegister(req.body);
  if (!isValid) {
    return res.status(400).json({errors});
  }

  try {
    // Check if mongo is connected
    if (mongoNotConnected()) {
      errors.message = 'Database not connected, contact server administrator';
      return res.status(400).json({errors});
    }

    let user = await User.findOne({email: req.body.email});
    if (user) {
      errors.email = Msg.EMAIL_EXSIT_ERROR;
      console.log('ERROR: email exists');
      return res.status(400).json({errors});
    } else {
      let username = await User.findOne({handle: req.body.handle});
      if (username) {
        errors.username = Msg.USERNAME_EXSIT_ERROR;
        console.log('ERROR: username/handle exists!');
        return res.status(400).json({errors});
      }

      let avatar = gravatar.url(req.body.email, {
        s: '200', // Size
        r: 'pg', // Rating
        d: 'mm', // Default
      });

      let newUser = new User({
        handle: req.body.handle,
        fname: req.body.fname,
        lname: req.body.lname,
        name: req.body.fname + ' ' + req.body.lname,
        email: req.body.email,
        avatar,
        password: req.body.password,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then((user) => {
            let profile = new Profile({user: user._id});
            profile.save(function(err) {
              if (err) console.log(err);
              // thats it!
            });
            res.json({
              success: true,
            });
          });
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// @route POST api/auth/login
// @desc Authenticates the user and returns user
// @access Public
module.exports.user_login = async (req, res) => {
  const {errors, isValid} = validateLogin(req.body);
  if (!isValid) {
    return res.status(400).json({errors});
  }
  const {email, password} = req.body;

  try {
    // Check if mongo is connected
    if (mongoNotConnected()) {
      errors.message = 'Database not connected, contact server administrator';
      return res.status(400).json({errors});
    }
    // Find user by email
    let user = await User.findOne({email});
    console.log('TEST1');
    if (!user) {
      errors.email = 'User not found';
    } else {
      // Check Password
      let matched = await bcrypt
          .compare(password, user.password)
          .catch((error) => console.log(error));
      if (matched) {
        return res.json({
          success: true,
          token: user.generateJWT(),
        });
      } else {
        errors.password = 'Password incorrect';
      }
    }
  } catch (err) {
    console.log(err);
  }

  // Decision to put this here was because it's a shorter method than registration
  // if the method was big like registration I would move this up to where the error message is declared
  return res.status(400).json({errors});
};

module.exports.user_logout = async (req, res) => {
  res.status(200).json({success: true});
};

module.exports.user_reset_password = async (req, res) => {
  res.send('NYI');
};
