import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./contact.css"; // Import custom CSS for styling

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    contactReason: "", // Add contact reason field
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle the dropdown selection change
  const handleSelectChange = (e) => {
    setFormData({ ...formData, contactReason: e.target.value });
  };

  // Form validation
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) {
      formErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      formErrors.message = "Message is required.";
    }
    if (!formData.contactReason) {
      formErrors.contactReason = "Please select a reason for contacting us.";
    }
    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitted(true);
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "", contactReason: "" }); // Clear the form
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact ScientistsHub</h1>
      <p>
      Whether you have questions, suggestions, or want to collaborate, we’d love to hear from you! At ScientistsHub, we thrive on curiosity and the power of collaboration. Your input and feedback help us grow, expand our knowledge, and continue to inspire others. Let’s explore, learn, and innovate together!
      </p>

      <section className="quick-contacts">
  <h2>Quick Contacts</h2>
  
  <ul>
    <li>
      <strong>Email:</strong> <a href="mailto:support@scientistshub.com">support@scientistshub.com</a>
    </li>
    {/* <li>
      <strong>Phone:</strong> <a href="tel:+1234567890">+1 234 567 890</a>
    </li> */}
    {/* <li>
      <strong>Social Media:</strong> <a href="https://twitter.com/scientistshub" target="_blank" rel="noopener noreferrer">Twitter</a> | <a href="https://facebook.com/scientistshub" target="_blank" rel="noopener noreferrer">Facebook</a> | <a href="https://instagram.com/scientistshub" target="_blank" rel="noopener noreferrer">Instagram</a>
    </li> */}
  </ul>
</section>


      {isSubmitted ? (
        <div className="success-message">Thank you for contacting us! We'll get back to you soon.</div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          

          {/* Name Input */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          {/* Contact Reason Dropdown */}
          <div className="contact-reason">
            <label htmlFor="contact-reason">Please select the reason for contacting us:</label>
            <select
              id="contact-reason"
              name="contactReason"
              value={formData.contactReason}
              onChange={handleSelectChange}
            >
              <option value="">--Select an option--</option>
              <option value="student">I am a Student</option>
    <option value="scientist">I am a Scientist</option>
    <option value="educator">I am an Educator</option>
    <option value="researcher">I am a Researcher</option>
    <option value="enthusiast">I am a Science Enthusiast</option>
              <option value="question">Have a science question or suggestion</option>
              <option value="report">Report errors or request new topics</option>
              <option value="collaborate">Collaborate with us to promote discoveries</option>
            </select>
            {errors.contactReason && <span className="error">{errors.contactReason}</span>}
          </div>

          {/* Message Input */}
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      )}

     
          {/* Adding the Privacy Policy Link */}
       <div className="contact-policy">
  <p>
    By submitting the form, you agree to our{" "}
    <NavLink to="/privacy-policy">Privacy Policy</NavLink>.
  </p>
  
  <p className="contact-note">
    Note: Your email is only used to reply to your inquiry and will not be shared.
  </p>
</div>

    
    </div>
  );
};

export default ContactUs;
