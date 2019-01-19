const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'No token provided' })
  }

  const parts = authHeader.split(' ')

  if (!(parts.length === 2)) {
    return res.status(401).json({ error: 'Wrong number of segments' })
  }

  const [ scheme, token ] = parts

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ error: 'Wrong scheme' })
  }

  jwt.verify(token, 'hashqualquer', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: err })
    }

    next()
  })
}

module.exports = auth
