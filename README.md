## Email Sender Program

This program is a Node.js application that enables the user to send an email using their Gmail account. The program uses the nodemailer package to handle email sending.

### Setup

To run the program, you need to have Node.js and nodemailer installed. You can install nodemailer by running the following command:

npm install nodemailer

### Usage

To use the program, you can create a new instance of the \`EmailSender\` class and call the \`start\` method. The \`start\` method prompts the user to select an option: send an email or exit.

#### Send an Email

If the user selects the option to send an email, the \`sendEmailPrompt\` method is called. The \`sendEmailPrompt\` method prompts the user to enter the recipient's email address, subject, message body, and HTML body (optional). Once the user enters the required information, the \`sendEmail\` method is called to send the email.

#### Exit

If the user selects the option to exit, the \`rl.close()\` method is called to close the readline interface and terminate the program.
