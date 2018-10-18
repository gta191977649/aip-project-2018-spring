const express = require('express');
const router = express.Router();
const passport = require('passport');

const OrderController = require('../controllers/OrderController');
// Authentication Method
const authenticateRoute = passport.authenticate('jwt', {
  session: false,
});

// @route POST api/orders/new
// @desc Creates a new order for the user
// @access Private
router.post('/new', authenticateRoute, OrderController.order_new);

// @route POST api/orders/
// @desc Fetches a list of orders where the user is the customer
// @access Private
router.post('/', authenticateRoute, OrderController.order_list);

module.exports = router;
