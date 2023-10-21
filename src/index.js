const express = require('express')
const router = require('./routes')
const db = require('./db')

const app = express()
const port = 8080

// Middlewares
app.use(express.json()) // converts request body to json format
app.use(express.urlencoded({
    extended: true
}))

// Default response on root route
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        code: 200,
        message: 'Welcome to my Blog API',
        data: []
    })
})

app.use(router)


// Error handling middleware
app.use((req, res) => {
    res.send('Not Found')
})

app.use((err, req, res) => {
    console.log(err)
    res.status(500).json({
        status: 'failed',
        message: 'internal server error',
        data: []
    })
})

db.connect()
.then((obj) => {
    app.listen(port, () => {
        obj.done()
        console.log(`Server is running on port ${port}`)
    })
})
.catch((error) => {
    console.log(error.message)
})

module.exports = app