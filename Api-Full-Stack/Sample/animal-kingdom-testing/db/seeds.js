// This seeds.js is really a self contained program we can run with
// a script we defined in package.json: `npm run seed`

// It's job is to give our db a bunch of data before we start developing
// It connects to mongoose, inserts data, then closes the connection.
const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Animal = require('../models/Animal')
const User = require('../models/User')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err)
    db.dropDatabase()
      .then(() => {
        return User.create([{
          username: 'Nick',
          email: 'nick@email',
          password: 'nick',
          passwordConfirmation: 'nick'
        }])
      })
      .then(users => {
        // Insert data
        console.log(`${'🙍‍♀️'.repeat(users.length)} users created`)
        return Animal.create([
          {
            name: 'Simba',
            species: 'Lion',
            isCarnivore: true,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcDmjZxUap66U0J0xsFYKLnATNDBCOYUHhUkHENz-STqidMGBc',
            dangerRating: 4,
            habitats: ['Pride Rock', 'Africa', 'Jungle'],
            user: users[0]
          },
          {
            name: 'Mufasa',
            species: 'Lion',
            isCarnivore: true,
            image: 'https://vignette.wikia.nocookie.net/lionking/images/e/e5/Mufasa.png/revision/latest?cb=20130512234313',
            dangerRating: 4,
            habitats: ['Pride Rock', 'Africa'],
            user: users[0]
          },
          {
            name: 'Sarabi',
            species: 'Lion',
            isCarnivore: true,
            image: 'https://vignette.wikia.nocookie.net/disney/images/2/2f/Sarabi.jpg/revision/latest?cb=20160621214011',
            dangerRating: 5,
            habitats: ['Pride Rock', 'Africa'],
            user: users[0]
          },
          {
            name: 'Baloo',
            species: 'Bear',
            isCarnivore: true,
            image: 'https://vignette.wikia.nocookie.net/disney/images/3/31/Profile_-_Baloo.jpeg/revision/latest?cb=20190712012558',
            dangerRating: 4,
            habitats: ['Jungle'],
            user: users[0]
          },
          {
            name: 'Po',
            species: 'Panda',
            isCarnivore: false,
            image: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-kung-fu-panda-2-po.jpg',
            dangerRating: 3,
            habitats: ['Bamboo Forest', 'Kung Fu Temple'],
            user: users[0]
          },
          {
            name: 'Bruce',
            species: 'Great White Shark',
            isCarnivore: true,
            image: 'https://images.immediate.co.uk/production/volatile/sites/3/2019/01/Jaws-crop-437b2b6.jpg?quality=90&resize=620,413',
            dangerRating: 5,
            habitats: ['Ocean', 'Amity Bay'],
            user: users[0]
          },
          {
            name: 'Dumbo',
            species: 'Elephant',
            isCarnivore: false,
            image: 'https://i0.wp.com/www.tor.com/wp-content/uploads/2019/03/Dumbo-Animated01.jpg?fit=1000%2C+9999&crop=0%2C0%2C100%2C601px&ssl=1',
            dangerRating: 3,
            habitats: ['Circus', 'The Sky'],
            user: users[0]
          },
          {
            name: 'King Julien',
            species: 'Lemur',
            isCarnivore: false,
            image: 'https://static.tvno.nu/2993062?forceFit=0&height=760&quality=50&width=1350',
            dangerRating: 2,
            habitats: ['Madagascar', 'Jungle', 'Africa'],
            user: users[0]
          },
          {
            name: 'Timon',
            species: 'Meerkat',
            isCarnivore: false,
            image: 'https://vignette.wikia.nocookie.net/lionking/images/e/e8/Timon.png/revision/latest/scale-to-width-down/350?cb=20130512182303',
            dangerRating: 1,
            habitats: ['Africa', 'Jungle', 'Pride Rock'],
            user: users[0]
          },
          {
            name: 'Pumba',
            species: 'Warthog',
            isCarnivore: false,
            image: 'https://vignette.wikia.nocookie.net/disney/images/e/e6/Profile_-_Pumbaa.jpeg/revision/latest?cb=20190312043302',
            dangerRating: 3,
            habitats: ['Africa', 'Jungle', 'Pride Rock'],
            user: users[0]
          },
          {
            name: 'Odette',
            species: 'Swan',
            isCarnivore: false,
            image: 'https://i.pinimg.com/originals/1d/1b/d9/1d1bd990bd1c1fe56119cd7c51e9b076.jpg',
            dangerRating: 1,
            habitats: ['France', 'Castles', 'Lakes'],
            user: users[0]
          },
          {
            name: 'Sebastien',
            species: 'Lobster',
            isCarnivore: true,
            image: 'https://vignette.wikia.nocookie.net/disney/images/c/ca/Profile_-_Sebastian.jpeg/revision/latest?cb=20190312033135',
            dangerRating: 1,
            habitats: ['Under the Sea'],
            user: users[0]
          },
          {
            name: 'Bambi',
            species: 'Deer',
            isCarnivore: false,
            image: 'https://vignette.wikia.nocookie.net/disney/images/c/ce/Profile_-_Bambi.png/revision/latest?cb=20190313173158',
            dangerRating: 1,
            habitats: ['Forest'],
            user: users[0]
          },
          {
            name: 'Abu',
            species: 'Monkey',
            isCarnivore: false,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxcIHYjakKq8kfVVU0AY60lNgIzYqWA_YBzq9UwH5be7V3FlZZ',
            dangerRating: 2,
            habitats: ['Sultans Palace', 'Jungle', 'Magic Caves'],
            user: users[0]
          },
          {
            name: 'Shere Khan',
            species: 'Tiger',
            isCarnivore: true,
            image: 'https://vignette.wikia.nocookie.net/disney/images/9/93/Profile_-_Shere_Khan.jpeg/revision/latest?cb=20190312124650',
            dangerRating: 5,
            habitats: ['Jungle'],
            user: users[0]
          },
          {
            name: 'Berlioz',
            species: 'House Cat',
            isCarnivore: true,
            image: 'https://vignette.wikia.nocookie.net/disney/images/3/34/Berlioz.jpg/revision/latest/scale-to-width-down/516?cb=20160818130240',
            dangerRating: 2,
            habitats: ['Paris'],
            user: users[0]
          },
          {
            name: 'Tramp',
            species: 'Dog',
            isCarnivore: true,
            image: 'https://vignette.wikia.nocookie.net/disney/images/f/fb/Profile_-_Tramp.jpeg/revision/latest?cb=20190314123412',
            dangerRating: 3,
            habitats: ['Streets', 'Marceline'],
            user: users[0]
          }
        ]
        )
      })
      .then(animals => console.log(`${animals.length} Animals created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)

