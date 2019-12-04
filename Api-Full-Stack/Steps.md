# Express Testing Notes
​
## Setup
​
Make sure you are in the correct repo that you wish to test and that you are running `mongod`.
​
To install the test packages, run `npm i mocha chai supertest`
​
Add the below code to your `package.json` file so you can easily run your tests:
​
```json
"scripts": {
    "test": "mocha test/**/*_spec.js --require test/helper --recursive --exit"
  }
```
​
In your `app.js` make sure that you are exporting by putting the below code at the end:
​
```javascript
module.exports = app
```
​
## Adding Tests
​
Add a new folder to the project root called `test`.
​
Within this folder, create a file called `helper.js` and add the below code:
​
```javascript
process.env.NODE_ENV = 'test'
​
const chai = require('chai')
global.expect = chai.expect 
​
const supertest = require('supertest')
const app = require('../app')
global.api = supertest(app)
```
​
Inside the test folder, create a new folder named `{whatever you are testing}`.
​
Within this new folder, create a file `index_spec.js` and insert the below code to import your models: 
​
## Test Animals
​
```javascript
/* global describe, beforeEach, afterEach, it, expect, api */
const Animal = require('../../models/Animal')
const User = require('../../models/User')
```
​
Start the test code with `describe` then define the type of request and route:
​
```javascript
describe('GET /animals', () => {
​
​
})
```
​
You will want to setup your database with some data before each of the tests is run, at least one user and a few *things*. Once the tests are complete, you will want to clear out the database again. You can add the below:
​
```js
 beforeEach(done => {
    User.create({
      username: 'test',
      email: 'test@email',
      password: 'test',
      passwordConfirmation: 'test'
    })
      .then(user => {
        Animal.create([
          {
            name: 'Simba',
            species: 'Lion',
            isCarnivore: true,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcDmjZxUap66U0J0xsFYKLnATNDBCOYUHhUkHENz-STqidMGBc',
            dangerRating: 4,
            habitats: ['Pride Rock', 'Africa', 'Jungle'],
            user
          },
          {
            name: 'Mufasa',
            species: 'Lion',
            isCarnivore: true,
            image: 'https://vignette.wikia.nocookie.net/lionking/images/e/e5/Mufasa.png/revision/latest?cb=20130512234313',
            dangerRating: 4,
            habitats: ['Pride Rock', 'Africa'],
            user
          }])
            .then(() => done())
        })
      })
    afterEach(done => {
      User.deleteMany()
        .then(() => Animal.deleteMany())
        .then(() => done())
    })
```
​
As you have written a lot of code now, you want to check a basic test is functioning, try testing you get a 200 response on a get request. Add the below code to the test:
​
```javascript
it('should return a 200 response', done => {
    api.get('/api/animals')
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })
```
​
Once this is done, go to your terminal and run the test using `npm run test`.
​
Next try checking that you get an array as a response:
​
```javascript
it('should return an array', done => {
    api.get('/api/things')
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        done()
      })
  })
```
​
## Test Users
​
Now that you have tested your basic *things* route you should also check your user registration.
​
Create a new folder within `test` called `users`.
​
In this new folder, create a new file called `register_spec.js` and add the below code:
​
```javascript
/* global describe, beforeEach, afterEach, it, expect, api */
const User = require('../../models/User')
​
const testUserCorrect = {
  username: 'nick1',
  email: 'nick1@nick1',
  password: 'test',
  passwordConfirmation: 'test'
}
​
const testUserIncorrect = {
  username: 'test',
  email: 'test@test',
  password: 'test',
  passwordConfirmation: 'another'
}
describe('POST /register', () => {
  
  beforeEach(done => {
    User.create({
      username: 'Nick',
      email: 'nick@email',
      password: 'nick',
      passwordConfirmation: 'nick'
    }).then(() => done())
  })
  
  afterEach(done => {
    User.deleteMany()
      .then(() => done())
  })
​
  it('should return a 200 response if request is valid', done => {
	 api.post('/api/register')
	    .send(testUserCorrect)
	    .end((err, res) => {
	      expect(res.status).to.eq(200)
	      done()
	    })
  })
  
  it('should return a 422 response if password !== passwordConfirmation', done => {
     api.post('/api/register')
        .send(testUserIncorrect)
        .end((err, res) => {
          expect(res.status).to.eq(422)
          done()
        })
    })
})
```
​
Run the test again using `npm run test`.
​
Remember to test something that you expect to pass as well as something you expect to fail so that you know your tests are working correctly.
Collap