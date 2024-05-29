import nodemailer from "nodemailer";

export async function POST(req: Request, res: Response) {
  const { name, email, message } = await req.json();
  console.log(name, email, message);

  // Set up the Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER, // Your email address
      pass: process.env.GMAIL_PASS, // Your email password
    },
  });

  // Set up email data
  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL, // Your email address to receive the message
    subject: `New message from ${name}`,
    text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ success: false });
  }
}
