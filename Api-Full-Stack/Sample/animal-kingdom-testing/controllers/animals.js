// Controllers contain all our 'handler logic' for our routes. So their
// job is essentially to use our models to perform CRUD operations
// (create, read, update, delete), and then send an appropriate response
// back to the client

const Animal = require('../models/Animal')

function create(req, res) {
  req.body.user = req.currentUser
  Animal.create(req.body)
    .then(animal => res.status(201).json(animal))
    .catch(err => console.log(err))
}

function index(req, res) {
  Animal
    .find()
    .populate('user')
    .then(animals => res.status(200).json(animals))
    .catch(err => console.log(err))
}

function show(req, res) {
  Animal
    .findById(req.params.id)
    .then(animal => {
      console.log('My animals is', animal)
      if (!animal) res.status(404).json({ message: '404 Not found' })
      else res.status(200).json(animal)
    })
    .catch(err => console.log(err))
}

function update(req, res) {
  Animal
    .findById(req.params.id)
    .then(animal => {
      if (!animal) return res.status(404).json({ message: '404 Not found' })
      if (!req.currentUser._id.equals(animal.user)) return res.status(401).json({ message: 'Unauthorized' })
      return animal.set(req.body)
    })
    .then(animal => animal.save())
    .then(animal => res.status(202).json(animal))
}

function remove(req, res) {
  Animal
    .findById(req.params.id)
    .then(animal => {
      if (!animal) return res.status(404).json({ message: 'Not Found' })
      return animal.remove()
    })
    .then(() => res.status(200).json({ message: 'Animal deleted' }))
    .catch(err => console.log(err))
}

function createComment(req, res) {
  req.body.user = req.currentUser
  Animal
    .findById(req.params.id)
    .populate('comments.user')
    .then(animal => {
      if (!animal) return res.status(404).json({ message: 'Not Found' })
      animal.comments.push(req.body)
      return animal.save()
    })
    .then(animal => res.status(201).json(animal))
    .catch(err => res.status(404).json({ message: 'Not Found' }))
}

function deleteComment(req, res) {
  Animal
    .findById(req.params.id)
    .then(animal => {
      if (!animal) return res.status(404).json({ message: 'Not Found' })
      const comment = animal.comments.id(req.params.commentId)
      comment.remove()
      return animal.save()
    })
    .then(animal => res.status(200).json(animal))
    .catch(err => res.json(err))
}

// Export all our functions
module.exports = {
  create,
  index,
  show,
  update,
  remove,
  createComment,
  deleteComment
}