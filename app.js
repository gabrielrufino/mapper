const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const app     = express()

app.use('/', require('./controllers/index'))

module.exports = app
