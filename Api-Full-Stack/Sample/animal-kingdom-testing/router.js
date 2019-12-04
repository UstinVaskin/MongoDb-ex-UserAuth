// The router is going to handle all our routing logic, and provide a nice way of adding
// our secure route middleware to routes where you need to be logged in.
const router = require('express').Router()
const animals = require('./controllers/animals')
const users = require('./controllers/users')
// Secure route is our custom middleware
const secureRoute = require('./lib/secureRoute')

router.route('/animals')
  .get(animals.index)
  .post(secureRoute, animals.create)

router.route('/animals/:id')
  .get(animals.show)
  .put(secureRoute, animals.update)
  .delete(secureRoute, animals.remove)

router.route('/animals/:id/comments')
  .post(secureRoute, animals.createComment)

router.route('/animals/:id/comments/:commentId')
  .delete(secureRoute, animals.deleteComment)

  router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

module.exports = router


