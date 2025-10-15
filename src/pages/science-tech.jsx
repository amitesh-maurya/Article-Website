/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

import Latest from "../components/latest"; // Import Latest component
import SuperTitle from "../components/superTitle";
import web3 from "./../images/Technology/web3  credit-weforum-org.png";
import lithiumcell from "./../images/Science/Lithiom oin Battry.jpeg";

import lithium2 from "./../images/Science/what is lithiom ion battry.jpeg";
import math1 from "./../images/Technology/maths cretiteNborzova  Dreamstimecom.jpeg";
import quantum1 from "./../images/Technology/Quantum Computer Credite- IBM.jpeg";

// import Article from "./ArticlePage/article";
function Science_Tech() {
  return (
    <div className="container-super">
      <SuperTitle title="Science & Tech" />

      {/* Default page cards */}
      <div className="grid-container">
        <div className="card">
          <Link to="what-is-web3">
            <img src={web3} alt="ARPANET" />
            <h2>What is Web 3.0 (Web3)?
            </h2>
            <p>
            Web3 represents a new era of the web defined by values like decentralization and advancements such as artificial intelligence and blockchain technology.
            </p>
          </Link>
        </div>

        <div className="card">
          <Link to="battery-chemistry">
            <img src={lithiumcell}
             alt="ARPANET" />
            <h2>Chemists engineer surprising battery chemistry</h2>
            <p>
            Lithium-metal batteries, equipped with lithium metal anodes, have the remarkable ability to store over twice the energy of traditional lithium-ion batteries with graphite anodes
            </p>
          </Link>
        </div>

        <div className="popular-card">
          <h2>Popular</h2>
          <ul>
            <div className="popular-card1">
            <Link to="lithium-batteries">
                <img
                  src={lithium2}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="The Internet of Behaviors (IoB)"
                  className="img-cover"
                />
                <div className="card-content">
                  <h4 className="headline headline-4 card-title">
                    <p>What Are Lithium-Ion Batteries and How Do They Work?

                    </p>
                  </h4>
                </div>
              </Link>
            </div>

            <div className="popular-card1">
            <Link to="what-is-web3">
                <img
                  src={web3}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="The Internet of Behaviors (IoB)"
                  className="img-cover"
                />
                <div className="card-content">
                  <h4 className="headline headline-4 card-title">
                    <p>What is Web 3.0 (Web3)?</p>
                  </h4>
                </div>
              </Link>
            </div>

            <div className="popular-card1">
            <Link to="maths1">
                <img
                  src={math1}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="The Internet of Behaviors (IoB)"
                  className="img-cover"
                />
                <div className="card-content">
                  <h4 className="headline headline-4 card-title">
                    <p>The Beauty and Power of Mathematics</p>
                  </h4>
                </div>
              </Link>
            </div>

            <div className="popular-card1">
            <Link to="quantum-computing">
                <img
                  src={quantum1}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="The Internet of Behaviors (IoB)"
                  className="img-cover"
                />
                <div className="card-content">
                  <h4 className="headline headline-4 card-title">
                    <p>Unveiling the Mysteries of Quantum Computing</p>
                  </h4>
                </div>
              </Link>
            </div>
          </ul>
        </div>
      </div>
      {/* .............. */}
      <h2 className="editor">Editor's Picks</h2>

      <div className="grid-list1">
        <ul>
          <li>
            <div className="card1">
              <Link to="lithium-batteries">
                <img
                  src={lithium2}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
            "
                  className="img-cover"
                />
                <h2>What Are Lithium-Ion Batteries and How Do They Work?</h2>

                <p>
                lithium ions (Li+) move internally between the cathode and the anode. Electrons flow in the opposite direction through the external circuit.
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
            <Link to="what-is-web3">
                <img
                  src={web3}
                  alt="web3"
                  width="200"
                  height="150"
                  loading="lazy"
                  class="img-cover"
                />
                <h2>What is Web 3.0 (Web3)?</h2>
                <p>
                  Web3 represents a new era of the web defined by values like
                  decentralization and advancements such as artificial
                  intelligence and blockchain technology.
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
              <Link to="maths1">
                <img
                  src={math1}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
              "
                  className="img-cover"
                />
                <h2>The Beauty and Power of Mathematics</h2>

                <p>
                In today's world, mathematics serves as the backbone of technology. Algorithms power computer programs and search engines,...
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
              <Link to="quantum-computing">
                <img
                  src={quantum1}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
              "
                  className="img-cover"
                />
                <h2>Unveiling the Mysteries of Quantum Computing</h2>

                <p>
                At the core of quantum computing is quantum mechanics. Qubits, or quantum bits, can exist in multiple states simultaneously due to a property called superposition
                </p>
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="latest-content">
        <Latest /> {/* This will render the Latest component directly here */}
      </div>
    </div>
  );
}

export default Science_Tech;
