const mongoose = require('mongoose');
const userSchema = require('../schemas/User');

const User = mongoose.model("User", userSchema);

module.exports = User;