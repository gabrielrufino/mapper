const mongoose = require('mongoose')
const bcrypt   = require('bcryptjs')
const jwt      = require('jsonwebtoken')

const User = mongoose.model('User')

const auth = async (req, res) => {
  const { username, password } = req.body

  const user = await User.findOne({ username }).select('+password')

  if (!user) {
    res.status(404).json({ error: 'User not found' })
  }


  const correctPassword = await bcrypt.compare(password, user.password)
  if (!correctPassword) {
    return res.status(400).json({ error: 'Invalid password' })
  }

  const payload = {
    id: user._id
  }

  const secret = 'hashqualquer'

  const token = jwt.sign(payload, secret, {
    expiresIn: 86400
  })

  res.json({ user, token })
}

module.exports = auth
