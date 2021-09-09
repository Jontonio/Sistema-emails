const jwt = require('jsonwebtoken');
const { request, response} = require('express');

const validarJWT = (req = request, res = response, next) => {
    const token = req.header('x-token');
    
    if(!token){
        return res.status(401).json({
            msg:'No hay token para la operación'
        })
    }

    try {
        
        const data = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        req.user = data

        next();
    } catch (error) {
        return res.status(401).json({
            msg:'Token no válido'
        })
    }
}


module.exports = validarJWT;