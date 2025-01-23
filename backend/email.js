require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require("express"); // Fix to require express correctly
const Router = express.Router();

Router.get("/sendEmail", async (req, res) => {
  try {
    const { name, email, organization, message } = req.query; // Extract values from req.query

    // Validate input
    if (!name || !email || !organization || !message) {
      return res.status(400).json({ message: "All input must be provided" }); // Use 400 status for bad request
    }

    // Create a transporter object using Gmail's SMTP server
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Function to send an email
    const sendEmail = async (to, subject, text) => {
      const mailOptions = {
        from,
        to: process.env.EMAIL_USER,
        subject,
        text,
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
        res.status(200).json({ message: "Email sent successfully" });
      } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Error sending email", error });
      }
    };

    await sendEmail(email, `${name} from ${organization}`, message);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
});

module.exports = Router;
