// /backend/data.js
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// this will be our data base's data structure
const Artworks = new Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: true
  },
  user: [
    { type: Schema.Types.ObjectId, ref: 'Users' }
  ]
})

module.exports = ArtworksSchema = mongoose.model('Artworks', Artworks)
