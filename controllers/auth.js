const mongoose = require('mongoose')
const User     = mongoose.model('User')

const auth = (req, res) => {
  res.json({ route: 'login' })
}

module.exports = auth
