import React, { useState } from "react";
import "./login.css"; // Add your CSS for styling

const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactOption, setContactOption] = useState("mobile"); // Default to mobile
  const [contactValue, setContactValue] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false); // State for newsletter subscription

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log(`${contactOption === "mobile" ? "Mobile" : "Email"}:`, contactValue);
    console.log("Newsletter Subscription:", isSubscribed ? "Yes" : "No");
    // Add your login and subscription logic here
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Toggle Mobile/Email Field */}
        <div className="form-group">
          <label htmlFor="contactOption">Login With:</label>
          <select
            id="contactOption"
            value={contactOption}
            onChange={(e) => {
              setContactOption(e.target.value);
              setContactValue(""); // Reset the input field
            }}
          >
            <option value="mobile">Mobile</option>
            <option value="email">Email</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="contactValue">
            {contactOption === "mobile" ? "Mobile Number" : "Email Address"}:
          </label>
          <input
            type={contactOption === "mobile" ? "tel" : "email"}
            id="contactValue"
            name="contactValue"
            value={contactValue}
            onChange={(e) => setContactValue(e.target.value)}
            placeholder={`Enter your ${contactOption}`}
            required
          />
        </div>

        {/* Newsletter Subscription */}
        <div className="form-group subscription">
          <label>
            <input
              type="checkbox"
              checked={isSubscribed}
              onChange={() => setIsSubscribed(!isSubscribed)}
            />
            Subscribe to our newsletter
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
