import React from "react";
import "./about.css"; // Optional CSS file for styling

const About = () => {
  return (
    <div className="about-page">
      {/* Header Section */}
      <header className="about-header">
        <h1>About ScientistsHub</h1>
        <p> Your Gateway to Scientific Excellence</p>
      </header>

      {/* Mission Section */}
      <section className="about-mission">
       
        <p>
        Welcome to<strong>ScientistsHub</strong>,  a digital platform that celebrates the wonders of science and technology. Our website is a one-stop encyclopedia where knowledge meets curiosity. At ScientistsHub, we aim to empower individuals with insightful articles, the latest discoveries, and well-researched content on groundbreaking technologies.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At <strong>ScientistsHub</strong>, our mission is to make science accessible, 
          understandable, and engaging for everyone. We aim to bridge the gap between 
          scientific discoveries and everyday understanding, inspiring curiosity 
          and fostering a love for learning.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="about-what-we-do">
        <h2>What We Do</h2>
        <ul>
          <li>
            <strong>Explore:</strong> Dive into articles on the latest breakthroughs, discoveries, and innovations.
          </li>
          <li>
            <strong>Learn:</strong> Understand complex scientific concepts through simplified explanations.
          </li>
          <li>
            <strong>Discover:</strong> Stay informed about technological advancements shaping the future.
          </li>
          <li>
            <strong>Engage:</strong> Join a community of learners, thinkers, and visionaries.
          </li>
        </ul>
      </section>

      {/* Why ScientistsHub Section */}
      <section className="about-why-us">
        <h2>Why ScientistsHub?</h2>
        <p>
          ScientistsHub is more than just a website; it's a community built on curiosity and a love for discovery. 
          Here's why our platform stands out:
        </p>
        <ul>
          <li>
            <strong>Comprehensive Content:</strong> We cover a wide range of topics across biology, physics, 
            astronomy, technology, and more.
          </li>
          <li>
            <strong>Authoritative Resources:</strong> All our articles are fact-checked to ensure accuracy and relevance.
          </li>
          <li>
            <strong>Inspiring Curiosity:</strong> We encourage readers to explore, question, and innovate.
          </li>
        </ul>
      </section>

      {/* Vision Section */}
      <section className="about-vision">
        <h2>Our Vision</h2>
        <p>
          We envision a world where science is embraced by everyone. At ScientistsHub, 
          we believe that knowledge leads to progress, and curiosity drives innovation. 
          Together, let's explore the unknown and shape the future through scientific discovery.
        </p>
      </section>

      {/* Call to Action Section */}
      <footer className="about-footer1">
        <p>
          Whether you're a budding scientist, a lifelong learner, or someone passionate about science, 
          ScientistsHub is here to support your journey. 
        </p>
        <p>
          <strong>Stay Curious. Keep Exploring.</strong>
        </p>
        <p>
          <em>- The ScientistsHub Team</em>
        </p>
      </footer>
    </div>
  );
};

export default About;
