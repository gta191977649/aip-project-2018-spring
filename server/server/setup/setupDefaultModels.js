'use strict';

const gravatar = require('gravatar');

const User = require('../models/User');
const Product = require('../models/Product');
const urlFriendlyName = require('../utils/create-url-name');

module.exports = () => {
  let defaultUser = require('../config/keys').defaultUser;

  User.findOne({email: defaultUser.email}).then((result) => {
    if (!result) {
      console.log('Creating default user');
      // Find default avatar
      let avatar = gravatar.url(defaultUser.email, {
        s: '200', // Size
        r: 'pg', // Rating
        d: 'mm', // Default
      });

      let user = new User({
        fname: defaultUser.fname,
        lname: defaultUser.lname,
        name: defaultUser.fname + ' ' + defaultUser.lname,
        email: defaultUser.email,
        avatar: avatar,
        password: defaultUser.password,
        handle: defaultUser.handle,
      });

      user.save().then(async (newUser) => {
        let {
          shirt,
          phone,
          bike,
          texteditor,
        } = require('../config/keys').defaultProducts;

        let clothesProduct = new Product({
          seller: newUser._id,
          link: urlFriendlyName(shirt.name),
          name: shirt.name,
          price: shirt.price,
          category: shirt.category,
          image: shirt.image,
          description: shirt.description,
          qty: shirt.qty,
        });

        let electronicsProduct = new Product({
          seller: newUser._id,
          link: urlFriendlyName(phone.name),
          name: phone.name,
          price: phone.price,
          category: phone.category,
          image: phone.image,
          description: phone.description,
          qty: phone.qty,
        });

        let toyProduct = new Product({
          seller: newUser._id,
          link: urlFriendlyName(bike.name),
          name: bike.name,
          price: bike.price,
          category: bike.category,
          image: bike.image,
          description: bike.description,
          qty: bike.qty,
        });

        let softwareProduct = new Product({
          seller: newUser._id,
          link: urlFriendlyName(texteditor.name),
          name: texteditor.name,
          price: texteditor.price,
          category: texteditor.category,
          image: texteditor.image,
          description: texteditor.description,
          qty: texteditor.qty,
        });

        let didClothesSave = await clothesProduct.save();
        let didElectronicsSave = await electronicsProduct.save();
        let didToySave = await toyProduct.save();
        let didSoftwareSave = await softwareProduct.save();

        if (
          !didClothesSave ||
          !didElectronicsSave ||
          !didToySave ||
          !didSoftwareSave
        ) {
          console.log('Error occured');
        }
      });
    } else {
      console.log('Default User found');
      return;
    }

    console.log('Default User Setup and Default Products Populated.');
  });
};
