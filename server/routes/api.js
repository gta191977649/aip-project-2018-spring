const express = require('express');
const router = express.Router();
const passport = require('passport');
const UserController = require('../controllers/UserController');
const ProfileController = require('../controllers/ProfileController');

// Auth Routes

router.get(
    '/auth/current',
    passport.authenticate('jwt', {session: false}),
    UserController.user_current
);

// @route POST api/auth/login
// @desc Authenticates the user and returns user
// @access Public
router.post('/auth/login', UserController.user_login);

// @route POST api/auth/logout
// @desc Destroys the user session and sends back login message
// @access Private
router.post('/auth/logout', UserController.user_logout);

// @route POST api/auth/resetpassword
// @desc Resets the password of a user
// @access Public
router.post('/auth/resetpassword', UserController.user_reset_password);

// @route POST api/auth/register
// @desc Authenticates the user and returns user
// @access Public
router.post('/auth/register', UserController.user_register);

// Profile Routes

// @route GET api/profiles
// @desc Gets the public profile list of the user
// @access Public
router.get('/profiles', ProfileController.profiles_get);

module.exports = router;
