const mongoose = require('mongoose')
const User     = mongoose.model('User')

const create = (req, res) => {
  const user = new User({
    name: req.name,
    username: req.username,
    password: req.password
  })

  user.save((err, user) => {
    if (err) {
      return res.send(err)
    }

    return res.send(user)
  })
}

module.exports = create
