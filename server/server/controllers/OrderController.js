const jwt = require('jsonwebtoken');

const Order = require('../models/Order');
const OrderItem = require('../models/OrderItem');
const Product = require('../models/Product');
const User = require('../models/User');

const isEmpty = require('../utils/isEmpty');

module.exports.order_list = async (req, res) => {
  let userid = req.body.userid;

  let orders = await Order.find({customer: userid}).catch((err) =>
    console.log(err)
  );
  res.json(orders);
};

module.exports.order_new = async (req, res) => {
  const {items} = req.body.cart;

  let token = req.headers.authorization;
  if (!token) {
    res.status(401).json({errors: {auth: 'No valid user found.'}});
  }
  let user = jwt.decode(token.split(' ')[1]);
  if (isEmpty(req.body.cart)) {
    return res
        .status(400)
        .json({errors: {message: 'Cart cannot be empty'}});
  }

  // Buffer for orderItem
  let orderItems = [];

  // Opted for this because of scoping issue
  for (let i = 0; i < items.length; i++) {
    let orderItem = items[i];
    let item = orderItem.item;

    let product = await Product.findById(item._id);
    if (!isEmpty(product)) {
      let seller = item.seller;
      let qty = orderItem.qty;

      // Prepare qty for usage and checking
      let newQty = product.qty - qty;

      if (newQty > 0) {
        product.qty = newQty;
        product.hasStock = product.qty > 0;
      } else {
        product.qty = 0;
        product.hasStock = false;
      }

      product.save();

      let newOrderItem = new OrderItem({
        product: product._id,
        seller: seller._id,
        qty: qty,
      });

      newOrderItem.save();
      orderItems.push(newOrderItem);
    }
  }

  let order = new Order();
  order.items = orderItems;
  order.isCompleted = false;
  order.customer = user.id; // not underscored because token's user id is not _id

  order.save();
  res.status(200).json({message: 'Success'});
};

module.exports.order_update = async (req, res) => {};

module.exports.order_delete = async (req, res) => {};
