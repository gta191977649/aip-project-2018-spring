const Msg = require('../utils/constant');
const express = require('express');
const router = express.Router();

// Routes
const authRoutes = require('./AuthRouter');
const profileRoutes = require('./ProfileRouter');
const productRoutes = require('./ProductsRouter');
const orderRoutes = require('./OrdersRouter');
const feedbackRoutes = require('./FeedbackRouter');

// Auth Routes
router.use('/auth', authRoutes);

// Profile Routes
router.use('/profiles', profileRoutes);

// Product Routes
router.use('/products', productRoutes);

// Order Routes
router.use('/orders', orderRoutes);

// Feedback Routes
router.use('/feedback', feedbackRoutes);

router.use(function(req, res) {
  res.status(404).send(Msg.NOT_FOUND);
});
module.exports = router;
