const express = require('express');
const router = express.Router();
const passport = require('passport');

const OrderController = require('../controllers/OrderController');
// Authentication Method
const authenticateRoute = passport.authenticate('jwt', {
  session: false,
});

router.post('/new', authenticateRoute, OrderController.order_new);

module.exports = router;
