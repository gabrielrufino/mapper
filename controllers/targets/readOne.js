const mongoose = require('mongoose')
const Target   = mongoose.model('Target')

const readOne = async (req, res) => {
  const target = await Target.findOne({ _id: req.params.id })
  if (!target) {
    return res.status(404).json({ error: 'Target not found' })
  }

  return res.json(target)
}

module.exports = readOne
