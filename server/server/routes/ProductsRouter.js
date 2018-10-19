const express = require('express');
const router = express.Router();
const passport = require('passport');

const multer = require('multer');
/* const formData = multer(); */
const imageUpload = require('../config/imageupload')(multer);

const ProductController = require('../controllers/ProductController');

// Authentication Method
const authenticateRoute = passport.authenticate('jwt', {
  session: false,
});

// Product Routes

// @route GET api/products/search
// @desc Returns a list matching a certain name
// @access Public
router.get('/search', ProductController.product_search);

// @route GET api/products
// @desc Gets the list of products
// @access Public
router.get('/', ProductController.products_list);

// @route POST api/products/new
// @desc Creates a new product
// @access Private
router.post(
    '/new',
    authenticateRoute,
    imageUpload.single('image'),
    ProductController.product_new
);
// @route GET api/products/:link
// @desc Gets the information of a single product
// @access Public
router.get('/:link', ProductController.product_info);

// @route DELETE api/products/:id
// @desc Deletes a product based upon id
// @access Private
router.delete('/:id', authenticateRoute, ProductController.product_delete);
// @route PUT api/products/:id
// @desc Updates the details of a product specified by ID
// @access Private
router.put('/:id', authenticateRoute, ProductController.product_update);

// @route GET api/products/serller/user:id
// @desc Gets the list of products by seller (userid)
// @access Public
router.get('/seller/:userid', ProductController.product_list_seller);

module.exports = router;
