// Load Models
const Product = require('../models/Product');

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

module.exports.product_info = async (req, res) => {
  if (!req.params) {
  }
  res.json({});
};

module.exports.product_new = async (req, res) => {
  console.log(req.params);

  // const newProduct = new Product({
  //   name: req.body.name,
  // });
  // let item = await newProduct.save();
  // res.json(item);
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
