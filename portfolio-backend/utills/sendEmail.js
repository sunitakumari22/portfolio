import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendNewMessageEmail = async (messageData) => {
  try {
    const mailOptions = {
      from: `"Message App" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: "📩 New Message!",
      html: `
        <h2>New message in the box!</h2>
        <p><strong>Message ID:</strong> ${messageData._id}</p>
        <p><strong>Content:</strong> ${JSON.stringify(messageData)}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString("en-IN")}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
  } catch (error) {
    console.error("error:", error);
  }
};