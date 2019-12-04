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


// connect to mongo 
// mongod --dbpath ~/data/db

//Create files and methods/ functions/ routs 

//create blueprint in models name string and code stign 


// create seeds.js and fill it up 

// npm run seed 

//check running localhost 7000 -> nodemon app.js


const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { dbURI, port } = require('./config/environment')
const router = require('./router')

// Need to connect to mongo with mongoose, to start interacting with our DB in javascript
mongoose.connect(dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log('Mongo is connected'))

// Create our express server
const app = express()


// Set up our middleware
app.use(bodyParser.json())

app.use((req, resp, next) => {
  console.log(`${req.method} to ${req.url}`)
  next()
})

app.use('/api', router)

// Listen on our port!
app.listen(port, () => console.log(`We are good to go on port ${port}`))




// To run we connect mongo using terminal command 
// mongod --dbpath ~/data/db

// then 
// then npm i 

// then we need to run seeds info terminal command
// npm run seed

// then we run a server terminal command 
// nodemon app.js 

