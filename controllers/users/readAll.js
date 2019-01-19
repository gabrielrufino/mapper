const mongoose = require('mongoose')
const User     = mongoose.model('User')

const readAll = async (req, res) => {
  const users = await User.find({})

  return res.json(users)
}

module.exports = readAll
