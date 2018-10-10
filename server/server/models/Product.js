const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  seller: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  category: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  img: {
    type: Array,
    required: true
  },
  description: {
    type: String,
    require: true
  }
});

// eslint-disable-next-line no-undef
module.exports = Product = mongoose.model("Product", ProductSchema);
