const mongoose = require('mongoose');
const { urlValidator } = require('./validate');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    validate: urlValidator,
    required: true,
  },
});
module.exports = mongoose.model('user', userSchema);