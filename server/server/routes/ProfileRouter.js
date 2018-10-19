'use strict';

const express = require('express');
const router = express.Router();
const passport = require('passport');
const ProfileController = require('../controllers/ProfileController');

// Authentication Method
const authenticateRoute = passport.authenticate('jwt', {
  session: false,
});

// @route GET api/profiles
// @desc Gets the public profile list of the user
// @access Public
router.get('/:handle', ProfileController.profiles_get);

// @route PUT api/profiles
// @desc Updates the users profile
// @access Private
router.put('/', authenticateRoute, ProfileController.profile_update);

module.exports = router;
