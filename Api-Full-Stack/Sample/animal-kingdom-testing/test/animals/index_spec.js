/* global describe, beforeEach, afterEach, it, expect, api */
const Animal = require('../../models/Animal')
const User = require('../../models/User')

describe('GET /animals', () => {

  beforeEach(done => {
    User.create({
      username: 'Nick',
      email: 'nick@email',
      password: 'nick',
      passwordConfirmation: 'nick'
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

    it('should return a 200 response', done => {
      api.get('/api/animals')
        .end((err, res) => {
          expect(res.status).to.eq(200)
          done()
        })
    })

    it('should return an array', done => {
      api.get('/api/animals')
        .end((err, res) => {
          expect(res.body).to.be.an('array')
          done()
        })
    })
})
