const express = require('express')
const router  = express.Router()

router.post('/', (req, res) => {
  res.send('POST /users')
})

router.get('/', (req, res) => {
  res.send('GET /users')
})

router.get('/:id', (req, res) => {
  res.send('GET /users/:id')
})

router.put('/:id', (req, res) => {
  res.send('PUT /users/:id')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /users/:id')
})

module.exports = router
