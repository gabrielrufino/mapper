const express = require('express')

const controller = require('../controllers/auth')

const router = express.Router()

router.post('/', controller)

module.exports = router
