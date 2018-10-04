const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const validateRegister = require('../validation/validateRegister');
const validateLogin = require('../validation/validateLogin');

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
    return res.status(400).json({
      errors,
    });
  }

  let user = await User.findOne({email: req.body.email});
  if (user) {
    errors.email = 'Email already exists';
    return res.status(400).json({errors});
  } else {
    let avatar = gravatar.url(req.body.email, {
      s: '200', // Size
      r: 'pg', // Rating
      d: 'mm', // Default
    });

    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      avatar,
      password: req.body.password,
    });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
            .save()
            .then((user) =>
              res.json({
                success: true,
                token: user.generateJWT(),
              })
            )
            .catch((err) => console.log(err));
      });
    });
  }
};

// @route POST api/auth/login
// @desc Authenticates the user and returns user
// @access Public
module.exports.user_login = async (req, res) => {
  const {errors, isValid} = validateLogin(req.body);
  if (!isValid) {
    return res.json({
      errors,
    });
  }
  const {email, password} = req.body;

  // Find user by email
  let user = await User.findOne({email});
  if (!user) {
    errors.email = 'User not found';
    return res.status(404).json({errors});
  }
  // Check Password
  let isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    res.json({
      success: true,
      token: user.generateJWT(),
    });
  } else {
    errors.password = 'Password incorrect';
    return res.status(400).json({errors});
  }
};

module.exports.user_logout = async (req, res) => {
  res.send('NYI');
};

module.exports.user_reset_password = async (req, res) => {
  res.send('NYI');
};
