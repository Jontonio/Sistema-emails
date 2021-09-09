const jwt = require('jsonwebtoken');

const generarJWT = (id = '', user = '', status) =>{
    return new Promise((resolve, reject) => {

        const payload = { id, user, status };

        jwt.sign(payload, process.env.SECRETORPRIVATEKEY,{
            expiresIn:'7h'
        },(err, token) => {
            if(err) {
                console.log(err)
                reject('Error al generar el token')
            }else{
                resolve(token)
            }
        })

    })
}

module.exports = generarJWT;