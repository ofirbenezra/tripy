"use strict";
const nodemailer = require("nodemailer");

function sendEmail(from, to, subject, text, htmlBody) {
    nodemailer.createTestAccount().then(testAccount => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            // host: "smtp.ethereal.email",
            // port: 587,
            // secure: false, // true for 465, false for other ports
            // auth: {
            //     user: testAccount.user, // generated ethereal user
            //     pass: testAccount.pass, // generated ethereal password
            // },
            service: 'gmail',
            auth: {
                user: 'chapati.tech@gmail.com',
                pass: '<password>'
            }
        });

        // send mail with defined transport object
        let info = transporter.sendMail({
            from: 'ofir.benezra@gmail.com', // sender address
            to: "chapati.tech@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        }).then(x => {
            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        }).catch(error => {
            console.log("Error: %s", error);
        });
    });
}

module.exports = {
    sendEmail
};
