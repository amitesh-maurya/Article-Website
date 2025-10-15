/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import web3 from "../../images/Technology/web3  credit-weforum-org.png";
import web30 from "../../images/Technology/web 3.jpeg";
import "./article.css";
const Article5 = () => {
  return (
    <main className="article-main">
      <div className="container-article">
        <div className="container-articleH">
          <p className="tags">
            <span className="tag1"> Science & Tech </span>
          </p>
          <h1> What is Web 3.0 (Web3)? </h1>
          <p className="author-date">
            <span className="author"></span> Published on January 1, 2025
          </p>
        </div>
        <br className="custom" />

        <section className="article-content">

        
          <h2>Web 3.0 (Web3)

          <figure>
            <img
              src={web3}
              alt=""
              className="article-image"
            />
            <figcaption>This image is an example of Web Technology Architecture but this article's focus is web3 (Image Credit: weforum.org )</figcaption>
          </figure>
          </h2>
          <p>
          Web 3.0, commonly referred to as Web3, marks a new era of the World Wide Web characterized by distinct values and technological advancements. Its key features include ubiquity, decentralization, artificial intelligence, blockchain technology, and improved connectivity. At its foundation, Web 3.0 employs blockchain to develop decentralized applications and systems. This integration empowers users with greater control over their data, facilitates peer-to-peer interactions, and enables transactions and governance without intermediaries.      
              </p>

         
          <p>

          What is clear, though, is that Web 3.0 will place a strong emphasis on decentralized applications and probably make extensive use of blockchain-based technologies.
          </p>
          <figure>
            <img
              src={web30}
              alt=""
              className="article-image"
            />
            <figcaption> This image is an example of web3 Major features but does not in this Article include All </figcaption>
          </figure>

          <h2> Key Primary Features of Web 3.0</h2>
          <p>
          Several key features of Web 3.0 define what this third generation of the web is likely to entail.

         </p>
          <ul>
            <li>
              <strong>Decentralized: </strong>Web 3.0 will deliver applications and services using a distributed approach, unlike the first two generations of the web, which were largely centralized and dependent on a central authority.
              <li>Every node maintains a copy of the blockchain, which guarantees both transparency and security.</li>
            </li>
            <li>
              <strong>Blockchain-based:</strong> Blockchain decentralization is essential for the development of Web 3.0's distributed applications and services. It enables data to be managed and validated across a widely distributed, peer-to-peer network. Additionally, blockchain uses a theoretically immutable ledger to record transactions and activities, which helps verify authenticity and foster trust among participants in the blockchain network. 
            </li>
            <li>
              <strong>Cryptocurrency-enabled:</strong> Cryptocurrency stands as a transformative pillar of Web 3.0, poised to fundamentally replace traditional fiat currency issued by central banks. This shift could reshape our financial landscape, offering greater autonomy and security to users everywhere.
            </li>
            
          </ul>
          <h2>Conclusion: Web3.
          </h2>
          <p>Web 3.0 is changing the internet by shifting from a centralized, platform-driven model to a decentralized, user-centric ecosystem. It gives individuals greater control over their data, improves privacy, and facilitates direct peer-to-peer interactions.</p>

          

          
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

export default Article5;
