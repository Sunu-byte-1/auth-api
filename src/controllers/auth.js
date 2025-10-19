const express = require('express')
const User = require('../models/auth')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

// POST /auth/register
exports.register =  async (req, res) => {
    try {
        const { username, password } = req.body

      
        const existing = await User.findOne({ username })
        if (existing) {
            return res.status(409).json({ message: 'ce compte existe deja' })
        }

        const hashedPwd = await bcrypt.hash(password, 10)
        await User.create({ username, password: hashedPwd })

        return res.status(201).json({ message: 'inscription reussie' })
    } catch (err) {
        return res.status(500).json({ message: 'erreur serveur lors de l\'inscription' })
    }
}

// POST /auth/login
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body

        const user = await User.findOne({ username })
        if (!user) {
            return res.status(401).json({ message: 'username ou password incorrect' })
        }

        const ok = await bcrypt.compare(password, user.password)
        if (!ok) {
            return res.status(401).json({ message: 'username ou password incorrect' })
        }
        const token = jwt.sign({sub : user._id, username : user.username}, process.env.JWT_SECRET, {expiresIn : '1h'})

        return res.status(200).json({ message: 'connexion reussie', token : token})
    } catch (err) {
        console.error('login error:', err)
        return res.status(500).json({ message: 'erreur serveur lors de la connexion' })
    }
}


exports.accueil = async (req, res) => {
    res.json({
    message: 'Bienvenue sur ton profil',
    user: req.user
  });
}
