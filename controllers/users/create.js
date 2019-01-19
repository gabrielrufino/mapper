const mongoose = require('mongoose')
const User     = mongoose.model('User')

const create = (req, res) => {
  const user = new User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  })

  user.save((err, user) => {
    if (err) {
      return res.send(err)
    }

    return res.send(user)
  })
}

module.exports = create
