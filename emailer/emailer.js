let nodemailer = require("nodemailer");
let smtpTransport = require("nodemailer-smtp-transport");

let details = require("./details");

exports.send = function(name, email, phone, message, cb) {
  let transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      auth: {
        user: details.botEmail, // generated ethereal user
        pass: details.botPw // generated ethereal password
      }
    })
  );

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Portfolio Bot 👻" <' + details.botEmail + ">", // sender address
    to: details.recepient, // list of receivers
    subject: "subject", // Subject line
    html: `<p>Name: ${name}</p><p>Phone ${phone}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      cb(error);
      return false;
    }
    console.log("Message sent: %s", info.messageId);
    cb(error);
    return true;
  });
};
