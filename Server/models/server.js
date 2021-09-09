const express = require('express')
const cors = require('cors');
const connect  = require('../db/connection');

const userPath = '/api/user'
const authPath = '/api/auth'
const emailPath = '/api/email'
const postPath = '/api/post'

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '5000';
        this.dbConnection();
        this.middlewares();
        this.routes();    
    }

    async dbConnection(){
        try {

            await connect.authenticate();
            console.log('db on line')
            
        } catch (error) {
            throw new Error ( error );
        }
    }

    middlewares(){
        this.app.use( express.json() );
        this.app.use( cors() )
    }

    routes(){
        // router for user
        this.app.use(userPath, require('../routers/user'))
        this.app.use(authPath, require('../routers/auth'))
        this.app.use(emailPath, require('../routers/emails'))
        this.app.use(postPath, require('../routers/post'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server listen on http://localhost:${this.port}`)
        })
    }
}

module.exports = Server;