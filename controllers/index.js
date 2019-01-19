const index = (req, res) => {
  res.json({ healthcheck: 'ok' })
}

module.exports = index
