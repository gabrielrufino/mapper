const express    = require('express')
const bodyParser = require('body-parser')
const cors       = require('cors')

const app = express()

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// Routes
const usersRouter = require('./routes/users')
const authRouter  = require('./routes/auth')

app.use('/users', usersRouter)
app.use('/auth', authRouter)
app.use('/', require('./controllers/index'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log('mapper-api listening on', port))

module.exports = app
