//Create app js 
// run "dependencies": {
// "body-parser": "^1.19.0",
// "development": "0.0.6",
// "express": "^4.17.1",
// "mongoose": "^5.7.12"

// -----------------------------------------------------

// ALSO for user authentififation we need 
// "jsonwebtoken": "^8.5.1",
//     "mongoose-unique-validator": "^2.0.3"
// "bcrypt": "^3.0.7",


// connect to mongo!!  
// mongod --dbpath ~/data/db

// seed npm run seed

//Create files and methods/ functions/ routs 

//create blueprint in models name string and code stign 


// create seeds.js and fill it up 

// npm run seed 

//check running localhost 8000 -> nodemon app.js

const express = require('express')
const mongoose = require('mongoose')
const { dbURI, port } = require('./config/environment')
const router = require('./router')
const bodyParser = require('body-parser')



// Need to connect to mongo with mongoose, to start interacting with our DB in javascript
// Mongoose use in JS 
mongoose.connect(dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log('Mongo is connected'))

// Create our express server
const app = express()

app.use(bodyParser.json())

app.use((req, resp, next) => {
  console.log(`${req.method} to ${req.url}`)
  next()
})

app.use('/', router)

// Listen on our port!
app.listen(port, () => console.log(`We are good to go on port ${port}`))


