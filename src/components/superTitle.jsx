import React from "react";
import "./superTitle.css"; // Import the CSS styles

const SuperTitle = ({ title, categoryClass }) => {
  return (
    <div className="super-title">
      <h1>
        {title}
        <hr className={`category ${categoryClass}`} />
      </h1>
    </div>
  );
};

export default SuperTitle;
