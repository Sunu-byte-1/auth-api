const mongoose = require('mongoose')

const schema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password : {
        type : String,
        required : true
    }
}, { timestamps: true })

const user = mongoose.model('User', schema)
module.exports = user