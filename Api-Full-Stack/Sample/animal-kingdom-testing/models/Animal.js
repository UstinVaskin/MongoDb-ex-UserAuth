
// We create a model with mongoose by defining a schema, then registering it
// by exporting mongoose.model with a name for our schema.

// Our model is used to validate incoming requests, define what fields are
// required, what types we expect them to be, as well as other restrictions
// on what our data can look like. We can define as many models as we like for
// our application
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

const animalSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  species: { type: String, required: true },
  isCarnivore: { type: Boolean, required: true },
  image: { type: String, required: true },
  dangerRating: { type: Number, required: true, min: 1, max: 5 },
  habitats: { type: [String] },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [ commentSchema ]
}, {
  timestamps: true
})

animalSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Animal', animalSchema)