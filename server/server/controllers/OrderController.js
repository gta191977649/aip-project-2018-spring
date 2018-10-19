const jwt = require('jsonwebtoken');

const Order = require('../models/Order');
const OrderItem = require('../models/OrderItem');
const Product = require('../models/Product');

const isEmpty = require('../utils/isEmpty');
const Msg = require('../utils/constant');

// TODO: Improve load times
module.exports.order_list = async (req, res) => {
  let token = req.headers.authorization;
  if (token) {
    let user = jwt.decode(token.split(' ')[1]);

    try {
      let orders = await Order.find({customer: user.id}).populate({
        path: 'items',
        populate: {
          path: 'product',
          select: 'price link name',
        },
      });

      return res.status(200).json(orders);
    } catch (err) {
      console.log(err);
      return res.status(500);
    }
  }

  return res
      .status(500)
      .json({errors: {orders: 'Unabled to find user id'}});
};

module.exports.order_new = async (req, res) => {
  const {items, cost} = req.body.cart;

  let token = req.headers.authorization;
  if (!token) {
    res.status(401).json({errors: {auth: Msg.NOT_VALID_USER}});
  }
  let user = jwt.decode(token.split(' ')[1]);
  if (isEmpty(req.body.cart)) {
    return res.status(400).json({errors: {message: Msg.CART_EMPTY}});
  }

  // Buffer for orderItem
  const orderItemIds = [];
  let orderItemBuffer = [];

  // Opted for this because of scoping issue
  for (let i = 0; i < items.length; i++) {
    let orderItem = items[i];
    let item = orderItem.item;
    orderItemIds.push(item._id);
  }

  let products = await Product.find({_id: {$in: orderItemIds}}).catch(
      (error) => console.error(error)
  );

  products.forEach((product, index) => {
    if (!isEmpty(product)) {
      const current = items.find(
          (item) => String(item.item._id) === String(product._id)
      );
      if (current === undefined) {
        return;
      }
      const seller = product.seller;
      const qty = current.qty;

      // Prepare qty for usage and checking
      // TODO: Improve -- Find a way of putting this in the model
      const newQty = product.qty - qty;

      if (newQty > 0) {
        product.qty = newQty;
        product.hasStock = product.qty > 0;
      } else {
        product.qty = 0;
        product.hasStock = false;
      }
      // End of TODO

      product.save();
      const orderItem = new OrderItem({
        product: product._id,
        seller: seller,
        qty,
      });
      orderItemBuffer.push(orderItem);
    }
  });
  console.log(orderItemBuffer);
  if (!isEmpty(orderItemBuffer)) {
    OrderItem.collection.insertMany(orderItemBuffer);
  }

  let order = new Order();
  order.items = orderItemBuffer;
  order.isCompleted = false;
  order.customer = user.id; // not underscored because token's user id is not _id
  order.total = cost; // Cost derived from cart;

  await order.save();
  order = await Order.findById(order._id).populate({
    path: 'items',
    populate: {
      path: 'product',
      select: 'price link name',
    },
  });
  res.status(200).json(order);
};

module.exports.order_update = async (req, res) => {};

module.exports.order_delete = async (req, res) => {};
