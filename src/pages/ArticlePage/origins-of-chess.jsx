/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import chess1 from "../../images/History/chess history.jpeg";
import "./article.css";
const Article10 = () => {
  return (
    <main className="article-main">
            {/* Helmet for SEO Metadata */}

            <Helmet>
        <title>The Fascinating Origins of Chess                </title>
        <meta
          name="description"
          content="science,technology, history, philosophy, society, animals, discoveries, earth."
        />
        <meta name="keywords" content="science,technology, history, philosophy, society, animals, discoveries, earth." />
        <meta name="author" content="ScientistsHub" />
      </Helmet>

      <div className="container-article">
        <div className="container-articleH">
          <p className="tags">
            <span className="tag1"> History & Society </span>
          </p>
          <h1> The Fascinating Origins of Chess                 </h1>
          <p className="author-date">
            <span className="author"></span> Published on January 1, 2025
          </p>
        </div>
        <br className="custom" />

        <section className="article-content">
          <h2> </h2>
          <p>
            
          </p>

          <figure>
            <img
              src={chess1}
              alt=""
              className="article-image"
            />
            <figcaption></figcaption>
          </figure>

          <h2>  </h2>
          <p>
          Chess has been played for more than 1,500 years. It was invented in India in the 6th century CE, and its earliest known form was called chaturanga. The pieces originally represented military units that were common in warfare at that time: infantry, cavalry, elephants, chariots, a general, and a king. The game spread from India to Persia in the 7th century and then westward to the broader Muslim world following the Islamic conquest of Persia. Islamic influence helped spread the game to southern Europe, where it reached Western Europe by around 1000 CE. An example of an early European chess set is the Isle of Lewis chessmen.          </p>

          <p>
          As chess spread through the Islamic world and into Europe, its rules were modified and the pieces received new names. The modern rules of chess began to take shape in Italy and Spain by the dawn of the 15th century. During this time, authors started publishing books on chess, and influential works by chess masters such as Luis Ramirez de Lucena, Ruy Lopez de Segura, and Gioachino Greco contributed to the development of chess study that continues to this day.

          </p>


        
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

export default Article10;
