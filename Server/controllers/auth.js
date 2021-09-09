
const {request, response} = require('express');

const { User } = require('../models/user');
const generarJWT = require('../helpers/generarJWT');

// login user 
const login = async (req = request, res = response ) => {

    const { email, password } = req.body

    // verificar sis usuario existe
    const user = await User.findOne({ 
        where:{ user:email }
    })

    if(!user){
        return res.status(400).json({
            msg:'Password / contraseña son incorrectos'
        })
    }

    // verificar si esta activo
    if(!user.status){
        return res.status(400).json({
            msg:'comuniquese con el administrador'
        })
    }

    // verificar la contraseña - va falta con encrypt
    if(password!=user.password){
        return res.status(400).json({
            msg:'Password / contraseña son incorrectos'
        })
    }

    // generar el JWT
    const token = await generarJWT(user.id, email, user.status);
    const data = {'id': user.id, 'user':user.user, 'status':user.status, token: token}
    res.json(data)
}

const logout = async (req = request, res = response ) => {
    const token = req.header('x-token');
}

const isActive = async (req = request, res = response) => {
    res.json(req.user)
}

module.exports = {
    login,
    logout,
    isActive
}