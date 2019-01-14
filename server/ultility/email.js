import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendMail = (payload) => {
  const date = new Date();
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: payload.email,
    subject: 'iReporter information',
    html: `<b>Hi ${payload.firstname}, <br /> Your incident status has been changed to ${payload.status}. <br />
    ${date} <br/><br/> <br />
    Thanks for using the APP!</b>`,
  };
  return transporter.sendMail(mailOptions);
};

export default sendMail;
