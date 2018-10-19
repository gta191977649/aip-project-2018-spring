const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const Profile = require('../models/UserProfile');
const Order = require('../models/Order');
const Product = require('../models/Product');
const OrderItem = require('../models/OrderItem');

const validateRegister = require('../validation/validateRegister');
const validateLogin = require('../validation/validateLogin');
const mongoNotConnected = require('../utils/checkMongooseConnection');
const capitalize = require('../utils/capitalize');
const Msg = require('../utils/constant');

// @route POST api/auth/current
// @desc Gets current user details
// @access Private
module.exports.user_current = async (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
  });
};

// @route POST api/auth/register
// @desc Authenticates the user and returns user
// @access Public
module.exports.user_register = async (req, res) => {
  const {errors, isValid} = validateRegister(req.body);
  if (!isValid) {
    return res.status(400).json({errors});
  }

  try {
    // Check if mongo is connected
    if (mongoNotConnected()) {
      errors.message = Msg.DATABASE_DISCONNECT_ERROR;
      return res.status(400).json({errors});
    }

    const user = await User.findOne({email: req.body.email});
    if (user) {
      errors.email = Msg.EMAIL_EXSIT_ERROR;
      console.log('ERROR: email exists');
      return res.status(400).json({errors});
    } else {
      const username = await User.findOne({handle: req.body.handle});
      if (username) {
        errors.username = Msg.USERNAME_EXSIT_ERROR;
        console.log('ERROR: username/handle exists!');
        return res.status(400).json({errors});
      }

      const avatar = gravatar.url(req.body.email, {
        s: '200', // Size
        r: 'pg', // Rating
        d: 'mm', // Default
      });

      const newUser = new User({
        handle: req.body.handle,
        fname: capitalize(req.body.fname),
        lname: capitalize(req.body.lname),
        name: capitalize(req.body.fname) + ' ' + capitalize(req.body.lname),
        email: req.body.email,
        avatar,
        password: req.body.password,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then((user) => {
            const profile = new Profile({user: user._id});
            profile.save(function(err) {
              if (err) console.log(err);
              // thats it!
            });
            res.json({
              success: true,
            });
          });
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// @route POST api/auth/login
// @desc Authenticates the user and returns user
// @access Public
module.exports.user_login = async (req, res) => {
  const {errors, isValid} = validateLogin(req.body);
  if (!isValid) {
    return res.status(400).json({errors});
  }
  const {email, password} = req.body;

  try {
    // Check if mongo is connected
    if (mongoNotConnected()) {
      errors.message = Msg.DATABASE_DISCONNECT_ERROR;
      return res.status(400).json({errors});
    }
    // Find user by email
    const user = await User.findOne({email});
    console.log('TEST1');
    if (!user) {
      errors.email = Msg.USERNAME_ERROR;
    } else {
      // Check Password
      const matched = await bcrypt
          .compare(password, user.password)
          .catch((error) => console.log(error));
      if (matched) {
        return res.json({
          success: true,
          token: user.generateJWT(),
        });
      } else {
        errors.password = Msg.PASSWORD_ERROR;
      }
    }
  } catch (err) {
    console.log(err);
  }

  // Decision to put this here was because it's a shorter method than registration
  // if the method was big like registration I would move this up to where the error message is declared
  return res.status(400).json({errors});
};

module.exports.user_stats = async (req, res) => {
  const token = req.headers.authorization;
  const errors = {};

  if (!token) {
    errors.auth = Msg.INVAILD_ERROR;
    res.status(401).json(errors);
  }
  const user = jwt.decode(token.split(' ')[1]);

  let numberOfOrders = 0;
  let numberOfProducts = 0;
  let numberOfSales = 0;
  let amountSpent = 0;
  let totalMade = 0;
  let orderQty = [];

  let productBuffer = [];

  const orders = await Order.find({customer: user.id});
  const products = await Product.find({seller: user.id});

  numberOfOrders = orders.length;
  numberOfProducts = products.length;
  orders.forEach((order) => {
    amountSpent += order.total;
  });

  products.forEach((product) => {
    productBuffer.push(product._id);
    console.log(product._id);
  });

  const orderitems = await OrderItem.find({product: {$in: productBuffer}});
  numberOfSales = orderitems.length;
  orderitems.forEach((orderItem) => {
    let product = products.find(
        (product) => String(product._id) === String(orderItem.product)
    );
    let qty = orderItem.qty;
    totalMade += product.price * qty;
  });

  const userinfo = {
    numberOfOrders,
    numberOfProducts,
    numberOfSales,
    amountSpent,
    totalMade,
  };
  return res.status(200).json(userinfo);
};

module.exports.user_logout = async (req, res) => {
  res.status(200).json({success: true});
};

module.exports.user_reset_password = async (req, res) => {
  res.status(500).send('Not yet implemented');
};
