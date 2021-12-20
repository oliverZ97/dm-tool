const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const movieRouter = require('./routes/test-router')
const blogentryRouter = require('./routes/blogentry-router')
const locationRouter = require('./routes/location-router')

const app = express()
const apiPort = 4100

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', movieRouter)
app.use('/api', blogentryRouter)
app.use('/api', locationRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))