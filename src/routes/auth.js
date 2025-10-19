const express = require('express')
const route = express.Router()
const controllers = require('../controllers/auth')
const middlewares = require('../middlewares/auth')


route.post('/register', middlewares.validation ,controllers.register)
route.post('/login', controllers.login)

route.get('/accueil', middlewares.tokenVerify, controllers.accueil)


module.exports = route
