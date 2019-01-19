const mongoose = require('mongoose')
const User     = mongoose.model('User')

const del = (req, res) => {
  User.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      return res.send(err)
    }

    return res.json()
  })
}

module.exports = del
