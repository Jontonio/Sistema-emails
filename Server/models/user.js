const connect = require('../db/connection')
const { DataTypes } = require('sequelize')

const User = connect.define('user',{
    user:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    status:{ 
        type: DataTypes.BOOLEAN
    }
})

const Register = connect.define('register', {
    name: { 
        type: DataTypes.STRING 
    },
    last_name: { 
        type : DataTypes.STRING 
    },
    email: {
        type: DataTypes.STRING
    },
    status:{ 
        type: DataTypes.BOOLEAN
    }
})


module.exports = { User, Register};