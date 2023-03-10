## This project was made with Node js and express

### Prerequisites

- Have npm installed on your machine.
- Move to the project folder and run ```npm install``` to install dependencies.
- To run the project you have to run ```npm start```
- App will run in port 8080 by default

### Exercises

- Zoo excercise will run in the command line, you have to select an animal and type a text for animal speaking
- Url Parser will parse the url pasted on you browser, you will have the json object with the params as the result (if version or id is not a number the server will return an error)

### Error Alarm Excercise

I'll describe the secuence to catch errors and then send an email when is necessary.
I chose `Nodemailer` that is a library from Node js to send email, we can use another one or a cloud service.

Create an `emailService` class and define `sendEmail` function that receives the message and call the service to send it.


```
import nodemailer from ‘nodemailer’;

const sendEmail = (message) =>{
  var transporter = nodemailer.createTransport({
    service: ‘gmail’,
    auth: {
      user: ‘rotula-test@gmail.com’,
      pass: ‘secretpassword’
    }
  });
  var mailOptions = {
    from: ‘rotula-test@gmail.com’,
    to: ‘rotula-supervisor@gmail.com’,
    subject: ‘Error Message Ocurred’,
    text: message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      logError(error);
    } else {
      console.log(‘Email was sent to: ‘ + info.response);
    }
 });
}
export sendEmail;
```

We can define a counter to see the frecuency of this error (globally in the App)
Every time that we catch an error we need to set the counter and if exceeds the limit, we'll send the email

```
import sendEmail from 'emailService.js';

let ERROR_COUNT = 0;
let LAST_EMAIL_SENT = 0;

try {
  throw new Exception(); // generates an exception
}
catch (e) {
  // use an existing log error function
  logError(error);
  ERROR_COUNT ++;

  // validate the error count and the last email was sent after a minute
  if(ERROR_COUNT >= 10 && (new Date().getTime() - LAST_EMAIL_SENT) > 60000 ){
    sendEmail(e.toString());
    // we need to set the ERROR_COUNT to 0 and LAST_EMAIL_SENT to the last email sent time
    ERROR_COUNT = 0;
    LAST_EMAIL_SENT = new Date().getTime();
  }
}
```