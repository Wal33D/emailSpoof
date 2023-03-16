

const EmailSender = require('./Mailer');

const senderEmail = 'myemail@gmail.com';
const password = 'mypassword';

const emailSender = new EmailSender(senderEmail, password);

emailSender.start();
