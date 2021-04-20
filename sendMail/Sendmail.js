const nodemailer = require('nodemailer');
const User = require('../models/client');

const sendMail =async (req,res)=>{

    const {email,subject,text}= req.body
    const user = User.findOne({email: email})
    if(user){

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'abdelwahadben00@gmail.com',
              pass: 'abdo12345'
            }
          });

          var mailOptions = {
            from: 'abdelwahadben00@gmail.com',
            to: `${email}`,
            subject: `${subject}`,
            text: `${text}`
          };

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
            res.send('email sent')
    }else{
        console.log("Not send")
    }
    }


module.exports = sendMail