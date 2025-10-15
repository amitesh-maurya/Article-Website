/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
// import { Outlet } from "react-router-dom";

import Latest from "./latest"; // Import Latest component
import SuperTitle from "./superTitle";
import heart from "../images/Discoveries/heart.png";
import internet6 from "./../images/Technology/5g network credite- investindia.gov.in.jpeg";
import web3 from "./../images/Technology/web3  credit-weforum-org.png";
import testicle1 from "./../images/Discoveries/Test Tube Human.png";
import scientists from "./../images/Technology/scientists.jpeg";
import lithiumcell from "./../images/Science/Lithiom oin Battry.jpeg";
import lithium2 from "./../images/Science/what is lithiom ion battry.jpeg";
import math1 from "./../images/Technology/maths cretiteNborzova  Dreamstimecom.jpeg";
import quantum1 from "./../images/Technology/Quantum Computer Credite- IBM.jpeg";

import chess1 from "./../images/History/chess history.jpeg";
import india1 from "./../images/History/indian -vally.jpeg";
import msimg2 from "./../images/Society/socity schecher.jpeg"
import "./home.css"; // Import CSS for styling
import isimg1 from "./../images/Society/indian-culcher -credite India Imprints.jpeg"

import biodiversity from "./../images/Animals/animals-Biodiversity  impact on the climate crisis.png";
import sparrow1 from "./../images/Animals/goreya credite bird aroun me.jpeg";
import climate1 from "./../images/Earth/Untitled (2).jpeg"
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="container-super">
        <Helmet>
        <title>ScientistsHub - Science,History,Society,Animals,Earth, </title>
        <meta
          name="description"
          content="science,technology, history, philosophy, society, animals, discoveries, earth."
        />
        <meta name="keywords" content="science,technology, history, philosophy, society, animals, discoveries, earth." />
        <meta name="author" content="Scientistshub" />
      </Helmet>
      <SuperTitle title="ScientistsHub" />

      {/* Default page cards */}
      <div className="grid-container">
        <div className="card">
          <Link to="/Discoveries/heart-attacks-link-cancer">
            <img src={heart} alt="ARPANET" />
            <h2>There is a link Between Heart attacks and Cancer.</h2>
            <p>
              Researchers show that factor-rich microscopic particles escape
              from the healing heart and travel through the bloodstream to reach
              existing tumors.
            </p>
          </Link>
        </div>
        {/* <Outlet /> */}

        <div className="card">
          <Link to="/Science_Tech/what-is-web3/">
            <img src={web3} alt="web3" />
            <h2>What is Web 3.0 (Web3)?</h2>
            <p>
              Web3 represents a new era of the web defined by values like
              decentralization and advancements such as artificial intelligence
              and blockchain technology.
            </p>
          </Link>
        </div>

        <div className="popular-card">
          <h2>Popular</h2>
          <ul>
            <div className="popular-card1">
              <Link to="/Science_Tech/what-is-web3" className="link hover-2">
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
              <Link to="/Discoveries/challenge-in-scientists" className="link hover-2">
                <img
                  src={scientists}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="The Internet of Behaviors (IoB)"
                  className="img-cover"
                />
                <div className="card-content">
                  <h4 className="headline headline-4 card-title">
                    <p>Facing the Challenges in the Scientists Community
                    </p>
                  </h4>
                </div>
              </Link>
            </div>

            <div className="popular-card1">
              <Link to="/Science_Tech/quantum-computing" className="link hover-2">
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
                    <p>Unveiling the Mysteries of Quantum Computing
                    </p>
                  </h4>
                </div>
              </Link>
            </div>

            <div className="popular-card1">
              <Link to="/Animals_Earth/animals-on-earth/" className="link hover-2">
                <img
                  src={biodiversity}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="The Internet of Behaviors (IoB)"
                  className="img-cover"
                />
                <div className="card-content">
                  <h4 className="headline headline-4 card-title">
                    <p>The Vital Role of Animals on Earth
                    </p>
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
              <Link to="/Science_Tech/lithium-batteries">
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
                  lithium ions (Li+) move internally between the cathode and the
                  anode. Electrons flow in the opposite direction through the
                  external circuit.
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
            <Link to="/Animals_Earth/climate-change/">
                <img
                  src={climate1}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
        "
                  className="img-cover"
                />
                <h2>Climate Change (Global Warming)
                </h2>

                <p>
                Present-day climate change refers to both global warming—the ongoing increase in the average global temperature
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
              <Link to="/Science_Tech/maths1">
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
                  In today's world, mathematics serves as the backbone of
                  technology. Algorithms power computer programs and search
                  engines
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
              <Link to="/Discoveries/internet-groth">
                <img
                  src={internet6}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
              "
                  className="img-cover"
                />
                <h2>The Internet: A Discovery That Connected the World</h2>

                <p>
                  The Internet has transformed the world, connecting people,
                  information, and resources in unprecedented ways,{" "}
                </p>
              </Link>
            </div>
          </li>
        </ul>
      </div>

      {/* <!--  .........Topics-Discoveries............ -->
      <!-- br --> */}

      <div>
        <h6 className="subjects"></h6>
        <h2 className="subjectsH">Discoveries</h2>
      </div>
      <div className="grid-list-subjects">
        <ul>
          <li>
            <div className="card1">
              <Link to="/Discoveries/heart-attacks-link-cancer">
                <img
                  src={heart}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
            "
                  className="img-cover"
                />
                <h2>There is a link Between Heart attacks and Cancer.</h2>

                <p>
                  Researchers show that factor-rich microscopic particles escape
                  from the healing heart and travel through the bloodstream to
                  reach existing tumors.
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
              <Link to="/Discoveries/artificial-testicles">
                <img
                  src={testicle1}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
                  "
                  className="img-cover"
                />
                <h2>in Reproductive Science: Test-Tube Testes</h2>

                <p>
                  Researchers developing the world's first "test-tube testes,"
                  which are lab-created gonads made from authentic testicular
                  cells.
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
              <Link to="/Discoveries/challenge-in-scientists">
                <img
                  src={scientists}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
              "
                  className="img-cover"
                />
                <h2>Facing the Challenges in the Scientists Community</h2>

                <p>
                  The scientific community is growing in importance by the day,
                  but at the same time, the challenges in science are increasing
                  exponentially
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
              <Link to="/Discoveries/internet-groth">
                <img
                  src={internet6}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
              "
                  className="img-cover"
                />
                <h2>The Internet: A Discovery That Connected the World</h2>

                <p>
                  The Internet has transformed the world, connecting people,
                  information, and resources in unprecedented ways,{" "}
                </p>
              </Link>
            </div>
          </li>
        </ul>
      </div>

      <Link to="/Discoveries" className="btn2 btn-secondary">
        <span className="span">More &raquo;</span>
      </Link>
      {/* <!-- br --> */}

      {/* <!-- ..............Science & Tech................. --> */}
      <div>
        <h6 className="subjects"></h6>
        <h6 className="s"></h6>
        <h2 className="subjectsH">Science & Tech</h2>
      </div>
      <div className="grid-list-subjects">
        <ul>
          <li>
            <div className="card1">
              <Link to="/Science_Tech/what-is-web3/">
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
              <Link to="/Science_Tech/battery-chemistry/">
                <img
                  src={lithiumcell}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
          "
                  className="img-cover"
                />
                <h2>Chemists engineer surprising battery chemistry</h2>

                <p>
                  Lithium-metal batteries, equipped with lithium metal anodes,
                  have the remarkable ability to store over twice the energy of
                  traditional lithium-ion batteries with graphite anodes..
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
              <Link to="/Science_Tech/lithium-batteries">
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
                  lithium ions (Li+) move internally between the cathode and the
                  anode. Electrons flow in the opposite direction through the
                  external circuit.
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
              <Link to="/Science_Tech/quantum-computing">
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
                  At the core of quantum computing is quantum mechanics. Qubits,
                  or quantum bits, can exist in multiple states simultaneously
                  due to a property
                </p>
              </Link>
            </div>
          </li>
        </ul>
      </div>

      <Link to="/Science_Tech" className="btn2 btn-secondary">
        <span className="span">More &raquo;</span>
      </Link>

      {/* <!--  .........Topics-History & Society......................... -->
<!-- br --> */}

      <div>
        <h6 className="subjects"></h6>
        <h2 className="subjectsH">History & Society</h2>
      </div>
      <div className="grid-list-subjects">
        <ul>
          <li>
            <div className="card1">
              <Link to="/History_Society/origins-of-chess">
                <img
                  src={chess1}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
      "
                  className="img-cover"
                />
                <h2>The Fascinating Origins of Chess
                </h2>

                <p>
                Chess has been played for more than 1,500 years. It was invented in India in the 6th century CE,
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
              <Link to="/History_Society/history-of-india">
                <img
                  src={india1}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
        "
                  className="img-cover"
                />
                <h2>History of India: A Journey Through Time
                </h2>

                <p>
                One of the earliest urban civilizations, the Indus Valley Civilization thrived in what is now Pakistan and northwest India
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
            <Link to="/History_Society/model-society">
            <img
                  src={msimg2}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
        "
                  className="img-cover"
                />
                <h2>Building a Better Society: Harmony and Progress
                </h2>

                <p>
                A just society guarantees equal opportunities for everyone, irrespective of gender, religion, ethnicity, or socio-economic status.
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
            <Link to="/History_Society/indian-society">
                <img
                  src={isimg1}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
              "
                  className="img-cover"
                />
                <h2>Indian Society: A Mosaic of Diversity</h2>

                <p>
                Indian society is a vibrant blend of cultures, traditions, and values that have evolved over centuries.
                </p>
              </Link>
            </div>
          </li>
        </ul>
      </div>

      <Link to="/History_Society" className="btn2 btn-secondary">
        <span className="span">More &raquo;</span>
      </Link>

      {/* <!--  .........Topics-Animal & Earth......................... -->

<!-- br --> */}

      <div>
        <h6 className="subjects"></h6>
        <h2 className="subjectsH">Animals & Earth</h2>
      </div>
      <div className="grid-list-subjects">
        <ul>
          <li>
            <div className="card1">
              <Link to="/Animals_Earth/animals-on-earth">
                <img
                  src={biodiversity}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
      "
                  className="img-cover"
                />
                <h2>The Vital Role of Animals on Earth
                </h2>

                <p>
                Animals play a crucial role in maintaining ecosystem health. Herbivores help regulate plant populations,
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
              <Link to="/Animals_Earth/house-sparrow/">
                <img
                  src={sparrow1}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
        "
                  className="img-cover"
                />
                <h2>House sparrow
                </h2>

                <p>
                The house sparrow is closely associated with human habitation and can thrive in both urban and rural environments
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
              <Link to="/Animals_Earth/climate-change/">
                <img
                  src={climate1}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
        "
                  className="img-cover"
                />
                <h2>Climate Change (Global Warming)
                </h2>

                <p>
                Present-day climate change refers to both global warming—the ongoing increase in the average global temperature
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
            <Link to="/Animals_Earth/climate-change/">
                <img
                  src={climate1}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
        "
                  className="img-cover"
                />
                <h2>Climate Change (Global Warming)
                </h2>

                <p>
                Present-day climate change refers to both global warming—the ongoing increase in the average global temperature
                </p>
              </Link>
            </div>
          </li>
        </ul>
      </div>

      <Link to="/Animals_Earth" className="btn2 btn-secondary">
        <span className="span">More &raquo;</span>
      </Link>

      {/* <!--  .........Topics-Philosophy ......................... -->
<!-- br --> */}

      {/* <div>
        <h6 className="subjects"></h6>
        <h2 className="subjectsH">Philosophy</h2>
      </div>
      <div className="grid-list-subjects">
        <ul>
          <li>
            <div className="card1">
              <Link href="">
                <img
                  src="https://via.placeholder.com/300x200"
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
      "
                  className="img-cover"
                />
                <h2>Lorem Ipsum</h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Distinctio placeat iure aliquid eaque sed aliquam dicta
                  maiores cupiditate earum quasi.
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
              <Link href="">
                <img
                  src="https://via.placeholder.com/300x200"
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
        "
                  className="img-cover"
                />
                <h2>Lorem Ipsum</h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Distinctio placeat iure aliquid eaque sed aliquam dicta
                  maiores cupiditate earum quasi.
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
              <Link href="">
                <img
                  src="https://via.placeholder.com/300x200"
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
        "
                  className="img-cover"
                />
                <h2>Lorem Ipsum</h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Distinctio placeat iure aliquid eaque sed aliquam dicta
                  maiores cupiditate earum quasi.
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
              <Link href="">
                <img
                  src="https://via.placeholder.com/300x200"
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
        "
                  className="img-cover"
                />
                <h2>Lorem Ipsum</h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Distinctio placeat iure aliquid eaque sed aliquam dicta
                  maiores cupiditate earum quasi.
                </p>
              </Link>
            </div>
          </li>
        </ul>
      </div>

      <Link to="/Philosophy" className="btn2 btn-secondary">
        <span className="span">More &raquo;</span>
      </Link> */}

      {/* Directly render Latest content */}
      <div className="latest-content">
        <Latest /> {/* This will render the Latest component directly here */}
      </div>
    </div>
  );
}

export default Home;
