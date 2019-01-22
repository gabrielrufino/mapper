const mongoose = require('mongoose')
const Target   = mongoose.model('Target')

const readAll = async (req, res) => {
  const targets = await Target.find({})

  return res.json(targets)
}

module.exports = readAll
