const mongoose = require('mongoose')

const host     = process.env.DB_HOST
const port     = process.env.DB_PORT
const database = process.env.DB_DATABASE
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

mongoose.connect(`mongodb://${username}:${password}@${host}:${port}/${database}`, {
  useNewUrlParser: true
})

module.exports = {}
