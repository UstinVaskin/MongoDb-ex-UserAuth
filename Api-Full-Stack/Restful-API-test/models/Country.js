
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


const countrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [commentSchema]
}, {
  timestamps: true
})


countrySchema.plugin(uniqueValidator)

module.exports = mongoose.model('Country', countrySchema)
