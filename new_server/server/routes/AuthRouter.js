const express = require('express');
const router = express.Router();
const passport = require('passport');
const UserController = require('../controllers/UserController');

// Authentication Method
const authenticateRoute = passport.authenticate('jwt', {
  session: false,
});

// Auth Routes
router.get('/current', authenticateRoute, UserController.user_current);

// @route POST api/auth/login
// @desc Authenticates the user and returns user
// @access Public
router.post('/login', UserController.user_login);

// @route POST api/auth/logout
// @desc Destroys the user session and sends back login message
// @access Private
router.post('/logout', UserController.user_logout);

// @route POST api/auth/resetpassword
// @desc Resets the password of a user
// @access Public
router.post('/resetpassword', UserController.user_reset_password);

// @route POST api/auth/register
// @desc Authenticates the user and returns user
// @access Public
router.post('/register', UserController.user_register);

module.exports = router;
