const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        required: true
    },
});

exports.default = User = mongoose.model('user', userSchema);
