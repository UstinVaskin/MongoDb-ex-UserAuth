// The router is going to handle all our routing logic, and provide a nice way of adding
// our secure route middleware to routes where you need to be logged in.



const router = require('express').Router()
const countries = require('./controllers/countries')
const users = require('./controllers/users')
const secureRoute = require('./lib/secureRoute')

router.route('/countries')
  .get(countries.index)
  .post(secureRoute, countries.create)

router.route('/countries/:id')
  // .put(secureRoute, countries.update)
  .get(countries.show)
  .put(secureRoute, countries.update)
  .delete(secureRoute, countries.remove)
  .post(secureRoute, countries.createComment)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)


module.exports = router