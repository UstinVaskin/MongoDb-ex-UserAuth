// Global environment variables we need in our server
const port = 8001
const dbURIPrefix = 'mongodb://localhost/'
const dbName = 'countries-base'
const dbURI = `${dbURIPrefix}${dbName}`

const secret = 'Fabulous flames'


module.exports = {
  port,
  dbURI,
  secret
}