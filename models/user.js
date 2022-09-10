const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'Жак-Ив Кусто',
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'Исследователь',
  },
  avatar: {
    type: String,
    default: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/e87d6373015979.Y3JvcCwxOTk5LDE1NjQsMCwyMDc.png',
  }
});

module.exports = mongoose.model('user', userSchema);