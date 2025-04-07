const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Setup Nodemailer (Use your email credentials)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "anushkasinghkgp@gmail.com", // Replace with your email
    pass: "oxdb dkoh bybz rxiu"   // Replace with your email password (or app password)
  }
});


app.get("/", (req, res) => {
  res.send("✅ Server is running!");
});

// ✅ POST API to Send Email
app.post("/submit-form", async (req, res) => {
  const { name, subject, email, message } = req.body;

  const mailOptions = {
    from: "anushkasinghkgp@gmail.com",
    to: "anushkasinghkgp@gmail.com", // Change to your recipient email
    subject: `New Contact Form Submission: ${subject}`,
    text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
  };
  
  try {
    transporter.sendMail(mailOptions);
    res.status(200).json({ message: "✅ Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "❌ Error sending email" });
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
