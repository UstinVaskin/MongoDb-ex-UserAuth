// Controllers contain all our 'handler logic' for our routes. So their
// job is essentially to use our models to perform CRUD operations
// (create, read, update, delete), and then send an appropriate response
// back to the client

const Country = require('../models/Country')

function index(req, res) {
  Country
    .find()
    .populate('user')
    .then(countries => res.status(200).json(countries))
    .catch(err => console.log(err))
}

function create(req, res) {
  req.body.user = req.currentUser
  Country.create(req.body)
    .then(country => res.status(201).json(country))
    .catch(err => {
      res.status(401).json({
        name: 'Please give a name to your country',
        code: 'what is your country code?'
      })
    })
}


function show(req, res) {
  Country
    .findById(req.params.id)
    .then(country => {
      console.log('My countrys is', country)
      if (!country) res.status(404).json({ message: '404 Not found' })
      else res.status(200).json(country)
    })
    .catch(err => console.error(err))
}

function update(req, res) {
  Country
    .findById(req.params.id)
    .then(country => {
      if (!country) return res.status(404).json({ message: '404 Not found' })
      if (!req.currentUser._id.equals(country.user)) return res.status(401).json({ message: 'Unauthorized' })
      return country.set(req.body)
    })
    .then(country => country.save())
    .then(country => res.status(202).json(country))
}


function remove(req, res) {
  Country
    .findById(req.params.id)
    .then(country => {
      if (!country) return res.status(404).json({ message: 'Not Found' })
      return country.remove()
    })
    .then(() => res.status(200).json({ message: 'Country deleted' }))
    .catch(err => console.log(err))
}

function createComment(req, res) {
  req.body.user = req.currentUser
  Country
    .findById(req.params.id)
    .then(country => {
      if (!country) res.status(404).json({ message: '404 Not found' })
      country.comments.push(req.body)
      return country
    })
    .then(country => country.save())
    .then(() => res.status(200).json({ message: 'Comment made' }))
}


// Export all our functions
module.exports = {
  create,
  index,
  show,
  update,
  remove,
  createComment
}