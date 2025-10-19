const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')

app.use(cors({
    origin : 'http://127.0.0.1:5500',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true 
}))


// database
const connect = require('./src/config/db')
connect()
app.use(express.json())

const userRoutes = require('./src/routes/auth')

app.use('/auth', userRoutes)

const PORT = process.env.PORT
const server = app.listen(PORT, () => {
	console.log(`connexion etablie au port ${PORT}`)
})

