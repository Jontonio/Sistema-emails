const {request, response } = require("express");
const Email = require('../models/email');


const sendEmail = async (req = request, res = response ) => {

    const { email, password, to, subject, message, html } = req.body;

    const readyEmail = new Email(email, password);

    const readyOptions = {
        from: email,
        to: to,
        subject: subject,
        text: message,
        html: html
    }

    await readyEmail.transporter.sendMail(readyOptions, (error, info) => {
        if(error){
            res.status(401).json({ msg: error })
        }else{
            res.json({ msg: 'Send message successfully'})
        }
    })

}


module.exports = {
    sendEmail
}