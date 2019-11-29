// USE !!! 

// install npm i jsonwebtoken

const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function register(req, res) {
  User
    .create(req.body)
    .then(() => res.status(200).json({ message: 'Thanks for regestering' }))
    .catch(err => {
      console.log(err)
      res.status(200).json({ message: 'Problem registering account', error: err.message })
    })
}


//I'm not sure I might have an issue here cuz insomnia wont alow to log in 
//TypeError: Cannot read property 'email' of undefined

function login(req, res) {
  User
    .findOne({ email: req.body.email }) //TypeError: Cannot read property 'email' of undefined
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized' })
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
      res.status(202).json({ message: `Welcome Back ${user.username}`, token })
    })
    .catch(() => res.status(401).json({ message: 'Unauthorized' }))
}

module.exports = {
  register,
  login
}
