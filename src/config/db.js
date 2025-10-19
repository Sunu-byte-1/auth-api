const mongoose = require('mongoose')
require('dotenv').config()

const connect = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('connecté a mongo')
        })
        .catch(err => {
            console.log('erreur cde connexion : ', err);
            
        })
}

module.exports = connect