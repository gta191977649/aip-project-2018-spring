const jwt = require("jsonwebtoken");

const Order = require("../models/Order");
const OrderItem = require("../models/OrderItem");
const Product = require("../models/Product");

const isEmpty = require("../utils/isEmpty");

module.exports.order_list = (req, res) => {
  let userid = req.body.id;

  Order.find({ customer: userid })
    .then(orders => {
      return res.status(200).json(orders);
    })
    .catch(err => console.log(err));
  res.status(400);
};

module.exports.order_new = async (req, res) => {
  const { items } = req.body.cart;

  let token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ errors: { auth: "No valid user found." } });
  }
  let user = jwt.decode(token.split(" ")[1]);
  if (isEmpty(req.body.cart)) {
    return res
      .status(400)
      .json({ errors: { message: "Cart cannot be empty" } });
  }

  // Buffer for orderItem
  const orderItems = [];
  const orderItemIds = [];

  // Opted for this because of scoping issue
  for (let i = 0; i < items.length; i++) {
    let orderItem = items[i];
    let item = orderItem.item;
    orderItemIds.push(item._id);
  }

  let products = await Product.find({ _id: { $in: orderItemIds } }).catch(
    error => console.error(error)
  );

  products.forEach((product, index) => {
    if (!isEmpty(product)) {
      let current = items.find(
        item => String(item._id) === String(product._id)
      );

      if (current === undefined) {
        return;
      }
      // let current = items.find(i => String(i._id) === String(product._id));
      // const current = items.find(i => String(i._id) === String(product._id));
      console.log(current);
      let seller = product.seller;
      let qty = current.qty;

      // Prepare qty for usage and checking
      // TODO: Improve -- Find a way of putting this in the model
      let newQty = product.qty - qty;

      if (newQty > 0) {
        product.qty = newQty;
        product.hasStock = product.qty > 0;
      } else {
        product.qty = 0;
        product.hasStock = false;
      }
      // End of TODO

      product.save();
      orderItem = new OrderItem({
        product: product._id,
        seller: product.seller,
        qty
      });
      orderItems.push(orderItem);
    }
  });

  OrderItem.collection.insertMany(orderItemIds).then(result => {
    console.log("OK");
  });

  console.log(orders);
  // newOrderItem.save(); // Save many ?

  // let order = new Order();
  // order.items = orderItems;
  // order.isCompleted = false;
  // order.customer = user.id; // not underscored because token's user id is not _id

  // order.save();

  res.status(400).json({ message: "Success" });
};

module.exports.order_update = async (req, res) => {};

module.exports.order_delete = async (req, res) => {};
