const mongoose = require('mongoose')
const User     = mongoose.model('User')

const auth = async (req, res) => {
  const { username, password } = req.body

  const user = await User.findOne({ username }).select('+password')

  if (!user) {
    res.status(404).json({ error: 'User not found.' })
  }

  res.json({ route: 'login' })
}

module.exports = auth
