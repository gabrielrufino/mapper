const mongoose = require('mongoose')
const User     = mongoose.model('User')

const readOne = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id })
  if (!user) {
    return res.status(404).json({ error: 'User not found' })
  }

  return res.json(user)
}

module.exports = readOne
