const mongoose = require('mongoose')
const Target   = mongoose.model('Target')

const create = (req, res) => {
  res.send('create')
}

module.exports = create
