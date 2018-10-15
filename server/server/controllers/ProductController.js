// Load Models
const Product = require('../models/Product');
const User = require('../models/Account');
const validateProduct = require('../validation/validateProduct');
const jwt = require('jsonwebtoken');
const mongoNotConnected = require('../utils/check-mongoose-connection');
const path = require('path');
const fs = require('fs');
const slugify = require('../utils/slugify');

module.exports.products_list = async (req, res) => {
  let items = await Product.find().catch((err) => console.log(err));
  res.json(items);
};

module.exports.product_search = async (req, res) => {
  if (req.query.name) {
    let name = req.query.name;
    let items = await Product.find({
      name: {
        $regex: '.*' + name + '.*',
      },
    }).catch((err) => console.log(err));
    res.json(items);
  } else {
    res.json([]);
  }
};

module.exports.product_info = async (req, res) => {};

module.exports.product_new = async (req, res, next) => {
  const {errors, isValid} = validateProduct(req);
  if (!isValid) {
    fs.unlink(
        path.join(__dirname, '../../uploads/', req.file.filename),
        function(error) {
          if (error) {
            throw error;
          }
          console.log('Failed Validation, Deleted image!');
        }
    );
    return res.status(400).json({errors});
  }
  console.log(req.file);
  try {
    // Check if mongo is connected
    if (mongoNotConnected()) {
      errors.message = 'Database not connected, contact server administrator';
      return res.status(400).json({errors});
    }

    let token = req.headers.authorization;
    if (!token) {
      errors.auth = 'not valid';
      res.status(401).json(errors);
    }

    let user = jwt.decode(token.split(' ')[1]);
    if (user) {
      const {filename} = req.file;
      let seller = user.id;
      let image = 'uploads/' + filename;
      let name = req.body.name;
      let category = req.body.category;
      let price = req.body.price.replace(/[^\d.]/g, ''); // removing non-digit or dot characters
      let description = req.body.description;
      let qty = req.body.qty;
      let link = slugify(req.body.name) + '-' + new Date().valueOf();

      let product = new Product({
        seller,
        link,
        name,
        price,
        category,
        image,
        description,
        qty,
      });

      product.save().then((product) => {
        console.log('Prod created');
        res.json({product});
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.product_list_seller = async (req, res) => {
  // Respond with all products created by user
  res.json([]);
};

module.exports.product_delete = async (req, res) => {
  // Delete a particular product
  res.json([]);
};

module.exports.product_update = async (req, res) => {
  // Update a product
  res.json([]);
};
