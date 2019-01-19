const mongoose = require('mongoose')
const User     = mongoose.model('User')

const update = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id })
  if (!user) {
    return res.status(404).json({ error: 'User not found' })
  }

  user.name     = req.body.name
  user.username = req.body.username
  user.save()

  return res.json(user)
}

module.exports = update
