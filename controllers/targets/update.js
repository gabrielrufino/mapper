const mongoose = require('mongoose')
const Target   = mongoose.model('Target')

const update = (req, res) => {
  res.send('update')
}

module.exports = update
