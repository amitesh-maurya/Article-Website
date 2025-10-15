/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import heart from "../../images/Discoveries/heart.png";
import extracellular from "../../images/Discoveries/Image of two small extracellular vesicles sEVs.jpeg";
import spironolactone from "../../images/Discoveries/hard madition(2).jpeg";
import "./article.css";
function Article1() {
  return (
    <main className="article-main">
      <div className="container-article">
        <div className="container-articleH">
          <p className="tags">
            <span className="tag1"> Discoveries </span>
          </p>
          <h1> There is a link Between Heart attacks and Cancer. </h1>
          <p className="author-date">
            <span className="author"></span> Published on January 1, 2025
          </p>
        </div>
        <br className="custom" />

        <section className="article-content">
          <h2> </h2>
          <p>
            From innovative methods for cancer treatment to understanding the
            complexities of the human gut biome, these discoveries not only
            enhance our comprehension of the world but also lay the foundation
            for future groundbreaking advancements.
          </p>

          <figure>
            <img src={heart} alt="" className="article-image" />
            <figcaption>An example of a ( digital Human Heart Image: )</figcaption>
          </figure>

          <h2> Researchers </h2>
          <p>
            Israeli scientists from Tel Aviv University and Sheba Medical Center
            have made a breakthrough in understanding why heart attack survivors
            have a higher risk of developing cancer.
          </p>
          <figure>
            <img src= {extracellular} alt="" className="article-image" />
            <figcaption>(Image of two small extracellular vesicles sEVs )</figcaption>
          </figure>
          <h2> Extracellular vesicles (sEVs) </h2>
          <p>
            They found that tiny bubbles released from the recovering heart
            called small extracellular vesicles (sEVs). They enter the
            bloodstream and end up “feeding” cancer tumors in other parts of the
            body.
          </p>

          <figure>
            <img src=            {spironolactone}
 alt="" className="article-image" />
            <figcaption>(Image is spironolactone formula )</figcaption>
          </figure>

          <h2> </h2>
          <p>
           
            By blocking these sEVs using drugs such as spironolactone, The
            researchers slowed tumor growth by up to 30 percent in animal tests.
          </p>

          <h2> </h2>
          <p>
            The discovery could lead to better treatments for heart attack
            patients, reducing their cancer risk.
          </p>
          <h2> </h2>
          <p>
            Researchers and clinicians have long observed that people with heart
            disease also have a greater risk of developing cancer.
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
              <Link to="#">
                The Internet: A Discovery That Connected the World
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </main>
  );
}

export default Article1;
