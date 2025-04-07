import React, { useState } from "react";
import "../../App.css";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://anushka-singh-cv-1.onrender.com/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("✅ Email sent successfully!");
        setFormData({ name: "", subject: "", email: "", message: "" });
      } else {
        setStatus("❌ Error sending email.");
      }
    } catch (error) {
      setStatus("❌ Server error, try again later.");
    }
  };

  return (
    <div id="contact" className="container-fluid pt-5">
      <div className="container mx-auto text-center p-3 contact-container">
        <h2 className="d-inline-block"><b>Contact Me</b></h2>
        <div className="row p-0">
          <div className="col-sm-6">
            <form className="was-validated mt-5" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
              </div>

              <div className="form-group">
                <input type="text" className="form-control" name="subject" placeholder="Your Subject" value={formData.subject} onChange={handleChange} required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
              </div>

              <div className="form-group">
                <input type="email" className="form-control" name="email" placeholder="Your E-mail" value={formData.email} onChange={handleChange} required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please enter a valid email.</div>
              </div>

              <div className="form-group">
                <textarea className="form-control" name="message" rows="3" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please enter a message.</div>
              </div>

              <button type="submit" className="btn contact_btn_style">Submit</button>
            </form>

            {status && <p className="mt-3">{status}</p>}
          </div>

          <div className="col-sm-6 pt-5">
            <h5>Phone-No.</h5>
            <p>(+91)7602034111</p>
            <h5>Email</h5>
            <p>anushkasinghkgp@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
