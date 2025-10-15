/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import lithium1 from "../../images/Science/mobail lithim battry.jpeg";
import lithium2 from "../../images/Science/what is lithiom ion battry.jpeg";
import "./article.css";
const Article7 = () => {
  return (
    <main className="article-main">
            {/* Helmet for SEO Metadata */}

            <Helmet>
        <title>What Are Lithium-Ion Batteries and How Do They Work?</title>
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
            <span className="tag1"> Science & Tech </span>
          </p>
          <h1> What Are Lithium-Ion Batteries and How Do They Work?</h1>
          <p className="author-date">
            <span className="author"></span> Published on January 1, 2025
          </p>
        </div>
        <br className="custom" />

        <section className="article-content">
          <h2> </h2>
          <p>
          Lithium-ion batteries are the most popular type of rechargeable battery in use today. They power many of the devices we rely on daily, including mobile phones and electric vehicles.
          </p>

          <figure>
            <img
              src={lithium1}
              alt=""
              className="article-image"
            />
            <figcaption>An example of a  (Lithium-ion Battery )</figcaption>
          </figure>

          <h2> </h2>
          <p>
          A lithium-ion battery consists of one or more lithium-ion cells and a protective circuit board. They are referred to as batteries once the cells are installed in a device along with the protective circuit board.
          </p>


         
          <h2>What are the components of a lithium-ion cell?</h2>
         
          <ul>
            <li>
              <strong>Electrodes:  </strong>The parts of a cell that are charged positively and negatively. They are attached to the current collectors.
            </li>
            <li>
              <strong>Anode: </strong> The electrode that carries a negative charge. 
            </li>
            <li>
              <strong>Electrolyte: </strong> A liquid or gel that conducts electricity within the cell.
            </li>
            <li>
              <strong>Current Collectors: </strong> Conductive foils located at each electrode of the battery. They connect to the cell terminals, which transmit electric current between the battery, the device it powers, and the energy source charging the battery. 
            </li>
          </ul>
          <figure>
            <img
              src={lithium2}
              alt=""
              className="article-image"
            />
            <figcaption>An example of a  (Lithium-ion Battery components )</figcaption>
          </figure>

<h2> How Does a Lithium-Ion Cell Work?</h2>
          <p>In a lithium-ion battery, lithium ions (Li+) move internally between the cathode and the anode. Electrons flow in the opposite direction through the external circuit. This movement of ions and electrons is what generates the electrical current to power the device.</p>
          <ul>

            <li>
              <strong>When the battery charges, the reverse occurs:   </strong>lithium ions are released by the cathode and absorbed by the anode.
            </li>
            <li>
              <strong>Separator:  </strong>A porous polymer film that separates the anode and cathode while allowing the exchange of lithium ions between them.
            </li>
           
            
          </ul>
          <p>Discover the essential components of a lithium-ion battery cell, which play a crucial role in powering our modern devices. Understanding these elements can help you appreciate the technology behind our everyday electronics</p>
          
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

export default Article7;
