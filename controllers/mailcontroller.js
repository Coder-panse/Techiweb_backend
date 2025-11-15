// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SECRET_KEY);

// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// const sendMail = async (req, res) => {
//     const {fullName,contactNo,organization,email,description}=req.body;
//     console.log(fullName,contactNo,organization,email,description)
//     const msg = {
//       to: "info@techiweb.in",
//       from: {
//         name:fullName,
//         email:"harshadpanse20@gmail.com"
//       }, // Must be a verified sender
//       subject:"For project regarding",
//       replyTo: email, // So you can reply directly to the user
//       text: `
//     You have a new message from your website contact form.
    
//     Name: ${fullName}
//     Organization:${organization}
//     Email: ${email}
//      ContactNo:${contactNo}
//     Message:: ${description}
//     You can reply directly to this email: ${email}
//       `,
//       html: `
//         <h3>New Message from Website Contact Form</h3>
//         <p><strong>Name:</strong> ${fullName}</p>
//         <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
//         <p><strong>Organization:</strong> ${organization}</p>
//         <p><strong> ContactNo::</strong> ${contactNo}</p>
//         <p><strong>Message:</strong><br/>${description}</p>
//         <hr/>
//         <p>You can reply directly to this email: <a href="mailto:${email}">${email}</a></p>
//       `,
//     };
  
//     try {
//       await sgMail.send(msg);
//       console.log("Email sent successfully");
//       return res
//         .status(200)
//         .json({ success: true, message: "Email sent successfully" });
//     } catch (error) {
//       console.error("Error sending email:", error);
//       if (error.response) {
//         console.error("SendGrid response error body:", error.response.body);
//       }
//       return res
//         .status(500)
//         .json({
//           success: false,
//           message: "Failed to send email",
//           error: error.message,
//         });
//     }
//   };

const sendMail = async (req, res) => {
  try {
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { fullName,contactNo,organization,email,description } = req.body;
    console.log(fullName,contactNo,organization,email,description)
    const data = await resend.emails.send({
      from: `Acme <onboarding@resend.dev>`,
      to: ['info@techiweb.in'],
      subject: 'New Form Submission',
      html: `
        <h3>Form Related to Project...</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${contactNo}</p>
        <p><strong>Message:</strong> ${description}</p>
      `,
    });
    console.log("email successfully sent")
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ error });
  }
};



  const applyForJob=(req,res)=>{
   console.log(req.body)
  }

  module.exports={sendMail,applyForJob}