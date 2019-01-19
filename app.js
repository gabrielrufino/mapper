const express    = require('express')
const bodyParser = require('body-parser')

const app = express()

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.use('/users', require('./routes/users'))
app.use('/', require('./controllers/index'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log('mapper-api listening on', port))

module.exports = app
