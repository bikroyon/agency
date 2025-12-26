import nodemailer from "nodemailer";

import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, mobile, message } = body;

  if (!name || !email || !mobile || !message) {
    return { status: "error", message: "All fields are required." };
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "mail.bikroyon.com",
      port: 465,
      secure: true,
      auth: {
        user: "contact@bikroyon.com",
        pass: "bikroyon123@#:;", 
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Website Contact" <contact@bikroyon.com>`,
      to: "contact@bikroyon.com",
      subject: "New Contact Form Submission",
      html: `
        <h3>New Message from Website Contact Form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return { status: "success", message: "Message sent successfully." };
  } catch (err) {
    console.error(err);
    return { status: "error", message: "Failed to send email." };
  }
});
