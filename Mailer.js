// Import required modules
const readline = require('readline');
const nodemailer = require('nodemailer');

// Define the EmailSender class
class EmailSender {
    constructor() {
        // Create a nodemailer transporter object using Gmail SMTP
        this.transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "example@gmail.com",
                pass: "examplepassword"
            }
        });
        // Create a readline interface for user input
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    // Prompt the user to enter email details and call sendEmail method
    sendEmailPrompt() {
        this.rl.question('Enter recipient email: ', (to) => {
            this.rl.question('Enter subject: ', (subject) => {
                this.rl.question('Enter text: ', (text) => {
                    this.rl.question('Enter HTML: ', (html) => {
                        this.sendEmail(to, subject, text, html);
                    });
                });
            });
        });
    }

    // Send the email using nodemailer
    sendEmail(to, subject, text, html) {
        const mailOptions = {
            from: "hitachik023@gmail.com",
            to: to,
            subject: subject,
            text: text,
            html: html
        };
        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Message sent: ' + info.response);
            }
            this.rl.close();
        });
    }

    // Start the program and prompt user for options
    start() {
        console.log('Welcome to Email Sp00f!\n');
        this.rl.question('Select an option:\n1. Send email\n2. Exit\n', (option) => {
            switch (option) {
                case '1':
                    this.sendEmailPrompt();
                    break;
                case '2':
                    this.rl.close();
                    break;
                default:
                    console.log('Invalid option');
                    this.start();
                    break;
            }
        });
    }
}

// Export the EmailSender class
module.exports = EmailSender;