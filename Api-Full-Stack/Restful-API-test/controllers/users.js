const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function register(req, res) {
  User
    .create(req.body)
    .then(() => res.status(200).json({ message: 'Thank you for registering' })) //changed
    .catch(err => {
      console.log(err)
      res.status(422).json({
        general: 'Please fill in all sections',
        email: 'Please add email',
        username: 'please add username',
        password: 'please add a password',
        confirm: 'password did not match'
      })
    })
}

function login(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized' })
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '5h' })
      res.status(202).json({
        message: `welcome back ${user.username}`,
        token
      })
    })
    .catch(() => res.status(401).json({ message: 'Unauthorized' }))

}

module.exports = {
  register,
  login
}