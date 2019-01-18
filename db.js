const mongoose = require('mongoose')

const host     = process.env.DB_HOST     || 'localhost'
const port     = process.env.DB_PORT     || '27017'
const database = process.env.DB_DATABASE || 'db_mapper'
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

mongoose.connect(`mongodb://${username}:${password}@${host}:${port}/${database}`, {
  useNewUrlParser: true
})

const db = mongoose.connection

db.on('error', () => {
  console.error('connection error')
})

db.once('open', () => {
  require('./models/User')
})

module.exports = db
