/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./article.css";
const Article3 = () => {
  return (
    <main className="article-main">
            {/* Helmet for SEO Metadata */}

            <Helmet>
        <title></title>
        <meta
          name="description"
          content="science,technology, history, philosophy, society, animals, discoveries, earth."
        />
        <meta name="keywords" content="science,technology, history, philosophy, society, animals, discoveries, earth." />
        <meta name="author" content="Scientistshub" />
      </Helmet>

      <div className="container-article">
        <div className="container-articleH">
          <p className="tags">
            <span className="tag1"> Science & Tech </span>
          </p>
          <h1> Heading </h1>
          <p className="author-date">
            <span className="author"></span> Published on January 1, 2025
          </p>
        </div>
        <br className="custom" />

        <section className="article-content">
          <h2> sub hading</h2>
          <p>
            paragraph
          </p>

          <figure>
            <img
              src="../images/"
              alt=""
              className="article-image"
            />
            <figcaption>An example of a  (Image: )</figcaption>
          </figure>

          <h2> Sub Heading </h2>
          <p>
        Paragraph
          </p>

          <h2> sub Heading </h2>
          <p>
           Paragraph

          </p>

          <figure>
            <img
              src="../images/"
              alt=""
              className="article-image"
            />
            <figcaption>(Image )</figcaption>
          </figure>

          <h2> Sub Heading </h2>
          <p>             Paragraph
          </p>
          <ul>
            <li>
              <strong>Agriculture: </strong>Insects
            </li>
            <li>
              <strong>Pollination</strong> Designing 
            </li>
            <li>
              <strong>Companionship:</strong> Pets
            </li>
            <li>
              <strong>Medicine and Research: </strong> Animals 
            </li>
          </ul>

          <figure>
            <img
              src="../images/"
              alt=""
              className="article-image"
            />
            <figcaption> (Image Credit: Birds Around Me)</figcaption>
          </figure>

          <h2>Challenges Facing Animals</h2>
          <p>Paragraph</p>
          <ul>
            <li>
              <strong>Habitat Loss: </strong>Urbanization
            </li>
            <li>
              <strong>Climate Change: </strong> Rising
            </li>
            <li>
              <strong>Pollution:</strong> Plastic 
            </li>
            <li>
              <strong>Poaching and Overexploitation: </strong> Illegal 
            </li>
          </ul>
        </section>

        <aside className="related-articles">
          <h2>Related Articles</h2>
          <ul>
            <li>
              <Link to="#">The Role of AI in Advancing Quantum Research</Link>
            </li>
            <li>
              <Link to="#">Top 5 Quantum Computing Breakthroughs of 2024</Link>
            </li>
            <li>
              <Link to="#">The Internet: A Discovery That Connected the World</Link>
            </li>
          </ul>
        </aside>
      </div>
    </main>
  );
};

export default Article3;
