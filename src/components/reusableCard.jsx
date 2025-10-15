import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./reusableCard.css"; // Optional CSS for styling

const ReusableCard = ({ title, description, image, link }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(link); // Navigate to the specified route
  };

  return (
    <div className="card" onClick={handleNavigate} style={{ cursor: "pointer" }}>
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

// PropTypes validation for better development experience
ReusableCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ReusableCard;
