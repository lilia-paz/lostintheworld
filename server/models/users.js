// /backend/data.js
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// this will be our data base's data structure
const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  sub: {
    type: String,
    required: true,
    unique: true
  },
  artworks: [
    { type: Schema.Types.ObjectId, ref: 'Artworks' }
  ]
})

module.exports = Users = mongoose.model('Users', UserSchema)
