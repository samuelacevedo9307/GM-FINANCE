import nodemailer from "nodemailer";
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "luisfelipegomezr2@gmail.com",
    pass: "ptedrtwvytnlqfmf",
  },
});

transporter.verify().then(() => {
  console.log("ready for sent emails");
});
