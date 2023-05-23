import nodemailer from "nodemailer";


 // create reusable transporter object using the default SMTP transport
 let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASS, // generated ethereal password
    },
  });
const handler = async(req,res)=>{
    const {input, message} = JSON.parse(req.body);
    if(req.method === "POST"){
        await transporter.sendMail({
            from: '"Fred Foo 👻" <info@s13.syntradeveloper.be>', // sender address
            to: "info@s13.syntradeveloper.be", // list of receivers
            subject: input, // Subject line
            text: message, // plain text body
            html: message, // html body
          });
        res.json("ok");
    }
  }
  export default handler;