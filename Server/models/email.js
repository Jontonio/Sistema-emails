const nodemailer = require('nodemailer')

class Email{

    constructor(user, password){
        // create transporter
        this.transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user: user,
                pass: password
            }
        })
    }

    options(from, to, subject, text, html = ''){
        return options = {
            from: from,
            to: to,
            subject: subject,
            text: text,
            html: html
        };
    }

    // sendEmail(from, to, subject, text){

    //     return new Promise((resolve, reject) => {

    //         // setup email content
    //         const options = {
    //             from: from,
    //             to: to,
    //             subject: subject,
    //             text: text,
    //             html: '<h1>Hola mundo</h1>'
    //         };
    
    //         // deliver email
    //         this.transporter.sendMail(options, function(error, info){
    //             if(error){
    //                 reject(error);
    //             }else{
    //                 resolve("send email successfully")
    //             }
    //         })

    //     })

    //     // setup email content
    //     // const options = {
    //     //     from: from,
    //     //     to: to,
    //     //     subject: subject,
    //     //     text: text,
    //     //     html: '<h1>Hola mundo</h1>'
    //     // };

    //     // // deliver email
    //     // return await this.transporter.sendMail(options, function(error, info){
    //     //     if(error){
    //     //         return "error send email";
    //     //     }else{
    //     //         return "send email";
    //     //     }
    //     // })

    // }

}

module.exports = Email;