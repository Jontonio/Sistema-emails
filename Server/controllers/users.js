
const {request, response} = require('express');
const { User, Register } = require('../models/user');
const generarJWT = require('../helpers/generarJWT');

// get user
const getUser = async (req = request, res = response) => {

    const { id } = req.params;

    const user = await User.findByPk(id);

    if(user){
        res.json({'response': user});
    }else{
        res.json({'response':'El usuario no existe'})
    }
}

// get users
const getUsers = async (req = request, res = response) => {
    const users = await User.findAll();
    if(users.length>0){
        res.json({'response': users})
    }else{
        res.json({'response':'Lista vacia de usuarios'})
    }
}

// delete user
const deleteUser = async (req = request, res = response) => {

    const { id } = req.params;
    const user = await User.findByPk(id);

    if(!user){
        return res.status(400).json({
            msg:'El usuario no existe'
        })
    }else{
        await user.update({ status: false })
        res.json({user})
    }

}

// register user
const registerUser = async (req = request, res = response) => {

    const {name, last_name, email, password } = req.body;

    const existeEmail = await Register.findOne({
        where: { email: email }
    });

    if(existeEmail){
        return res.status(400).json({'Error':'El email ya esxiste'})
    }else{
        // register on table register
        const newUser = await Register.create({
            name, last_name, email
        })

        // encryptar password
        //TODO: Falta

        // register on table user
        const user = await User.create({
            user: email, password: password
        })

        const token = await generarJWT(user.id, email, user.status);


        await newUser.save();
        await user.save();
        const data = {...newUser.dataValues,...user.dataValues, token}
        res.json(data)
    }
}

module.exports = {
    getUser,
    getUsers,
    registerUser,
    deleteUser
}