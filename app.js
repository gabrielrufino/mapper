const express = require('express')
const app     = express()

app.use('/users', require('./routes/users'))
app.use('/', require('./controllers/index'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log('mapper-api listening on', port))

module.exports = app
