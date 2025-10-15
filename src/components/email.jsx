import React, { useState } from "react";
import "./email.css";
const Email = () => {
  // State to manage the email input
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubscribe = (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // If valid, set subscription status
    setIsSubscribed(true);
    setErrorMessage(""); // Clear any previous error message

    // Here you could integrate your backend logic to save the email (optional)
    console.log("Subscribed with email:", email);

    // Reset email field
    setEmail("");
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>

      {/* Email Subscription Form */}
      <div className="subscription-container1">
        <h2>Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
            className="email-input1"
          />
          <button type="submit" className="subscribe-button1">Subscribe</button>
        </form>

        {/* Show success or error message */}
        {isSubscribed && <p className="success-message1">Thank you for subscribing!</p>}
        {errorMessage && <p className="error-message1">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Email;
