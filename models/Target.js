const mongoose = require('mongoose')

const targetSchema = new mongoose.Schema({
  name: String,
  destiny: String
})

const target = mongoose.model('Target', targetSchema)

module.exports = target
