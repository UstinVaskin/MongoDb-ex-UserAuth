const Creature = require('../../models/Country')
const User = require('../../models/User')

describe('GET /countries', () => {

  beforeEach(done => {
    User.create({
      username: 'Ustin',
      email: 'Ustin@email',
      password: '12345',
      passwordConfirmation: '12345'
    })
      .then(user => {
        Creature.create([
          {
            name: 'Ustinland',
            code: 'UL',

            user
          },
          {
            name: 'Lollipoland',
            code: 'LP',

            user
          }])
          .then(() => done())
      })
  })

  afterEach(done => {
    User.deleteMany()
      .then(() => Creature.deleteMany())
      .then(() => done())
  })

  it('should return a 200 response', done => {
    api.get('/api/countries')
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  it('should return an array', done => {
    api.get('/api/countries')
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        done()
      })
  })
})