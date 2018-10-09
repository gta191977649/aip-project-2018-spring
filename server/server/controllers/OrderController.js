// eslint-disable-next-line
const Order = require('../models/Order');

module.exports.order_list = async (req, res) => {
  let orders = await Order.find().catch((err) => console.log(err));
  res.json(orders);
};

module.exports.order_new = async (req, res) => {};

module.exports.order_update = async (req, res) => {};

module.exports.order_delete = async (req, res) => {};
