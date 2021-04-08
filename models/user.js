const mongoose = require('mongoose')
const Schema = mongoose.Schema

// The User schema has everything we need to begin authentication
const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true },
    cart: []
  },
  { timestamps: true }
)

module.exports = mongoose.model('users', User)