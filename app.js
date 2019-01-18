const express = require('express')
const app     = express()

app.use('/users', require('./routes/users'))
app.use('/', require('./controllers/index'))

module.exports = app
