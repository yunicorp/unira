export const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

export const sendEmail = async (to, subject, text) => {
  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Unira" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
  });
};
