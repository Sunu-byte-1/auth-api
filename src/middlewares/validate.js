const validate = (schema) => {
   return (req, res, next) => {
        const {error} = schema.validate(req.body, {abortEarly : false})

        if (error) {
            return res.status(400).json({message : 'echec de la validation des donnees'})
        }
        next()
   }
}

module.exports = validate