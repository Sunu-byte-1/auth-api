const joi = require('joi')


const userSchema = joi.object({
    username : joi.string().min(3).max(30).required(),
    password : joi.string().min(3).max(30).required()
})

module.exports = userSchema