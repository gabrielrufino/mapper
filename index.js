const dotenv = require('dotenv')
dotenv.config()

const db  = require('./db')
const app = require('./app')

module.exports = {
  db,
  app
}
