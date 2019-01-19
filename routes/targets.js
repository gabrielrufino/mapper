const express = require('express')
const router  = express.Router()

router.post('/', (req, res) => {
  res.send('POST /targets')
})

router.get('/', (req, res) => {
  res.send('GET /targets')
})

router.get('/:id', (req, res) => {
  res.send('GET /targets/:id')
})

router.put('/:id', (req, res) => {
  res.send('PUT /targets/:id')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /targets/:id')
})
