const express = require('express')
const route = express.Router()
const controllers = require('../controllers/auth')
const middlewares = require('../middlewares/auth')
const authSchema = require('../validator/authvalidator')
const validate = require('../middlewares/validate')


route.post('/register', validate(authSchema) ,controllers.register)
route.post('/login', controllers.login)

route.get('/accueil',validate(authSchema), middlewares.tokenVerify, controllers.accueil)


module.exports = route
