const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },

    role: {
        type: String,
        default: "User"
    },

    password: {
        type: String,
        required: true,
    }

});

module.exports = mongoose.model('User', userSchema);