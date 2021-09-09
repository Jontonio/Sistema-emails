const { Sequelize } = require('sequelize');

const connet = new Sequelize('web-app','root','', {
    host:'localhost',
    dialect:'mariadb',
    // logging:false
})

module.exports = connet;