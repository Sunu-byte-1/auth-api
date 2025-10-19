const jwt = require('jsonwebtoken')

exports.validation = (req, res, next) => {
    const {username , password} = req.body 

     if (!username || !password) {
    return res.status(400).json({ message: "Username et password sont requis." });
  }

    if (password.length < 8) {
        return res.status(400).json({message : 'mot de pass trop court'})
    }
    if (username.length < 4) {
        return res.status(400).json({message : 'Minimum 3 caractere pour le username'})
    }

    next()
}

exports.tokenVerify = (req, res ,next) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Accès refusé. Token manquant.' })
    }

    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(403).json({message : 'Token invlide ou expiré'})
    }
}