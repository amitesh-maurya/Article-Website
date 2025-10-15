import React from "react";
import ReusableCard from "./reusableCard"; // Import the reusable card component

const PopularCard = () => {
  // Data for the popular cards
  const popularArticles = [
    {
      title: "The Internet of Behaviors (IoB)",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      title: "The Internet of Behaviors (IoB)",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      title: "The Internet of Behaviors (IoB)",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      title: "The Internet of Behaviors (IoB)",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
  ];

  return (
    <div className="popular-card">
      <h2>Popular</h2>
      <ul>
        {popularArticles.map((article, index) => (
          <div className="popular-card1" key={index}>
            <ReusableCard
              title={article.title}
              description=""
              image={article.image}
              link={article.link}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PopularCard;
