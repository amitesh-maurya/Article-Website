/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

import Latest from "../components/latest"; // Import Latest component
import SuperTitle from "../components/superTitle";

function Philosophy(){

    return(
        <div className="container-super">
<SuperTitle title="Philosophy" />


      {/* Default page cards */}
      <div className="grid-container">
        <div className="card">
          <Link to="/article">
            <img src="https://via.placeholder.com/300x200" alt="ARPANET" />
            <h2>The Internet: A Discovery That Connected the World</h2>
            <p>
              The Internet has transformed the world, connecting people,
              information, and resources in unprecedented ways.
            </p>
          </Link>
        </div>

        <div className="card">
          <Link to="/article">
            <img src="https://via.placeholder.com/300x200" alt="ARPANET" />
            <h2>The Internet: A Discovery That Connected the World</h2>
            <p>
              The Internet has transformed the world, connecting people,
              information, and resources in unprecedented ways.
            </p>
          </Link>
        </div>

        <div className="popular-card">
          <h2>Popular</h2>
          <ul>
            <div className="popular-card1">
              <Link to="#" className="link hover-2">
                <img
                  src="https://via.placeholder.com/300x200"
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="The Internet of Behaviors (IoB)"
                  className="img-cover"
                />
                <div className="card-content">
                  <h4 className="headline headline-4 card-title">
                    <p>The Internet of Behaviors (IoB)</p>
                  </h4>
                </div>
              </Link>
            </div>

            <div className="popular-card1">
              <Link to="#" className="link hover-2">
                <img
                  src="https://via.placeholder.com/300x200"
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="The Internet of Behaviors (IoB)"
                  className="img-cover"
                />
                <div className="card-content">
                  <h4 className="headline headline-4 card-title">
                    <p>The Internet of Behaviors (IoB)</p>
                  </h4>
                </div>
              </Link>
            </div>

            <div className="popular-card1">
              <Link to="#" className="link hover-2">
                <img
                  src="https://via.placeholder.com/300x200"
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="The Internet of Behaviors (IoB)"
                  className="img-cover"
                />
                <div className="card-content">
                  <h4 className="headline headline-4 card-title">
                    <p>The Internet of Behaviors (IoB)</p>
                  </h4>
                </div>
              </Link>
            </div>

            <div className="popular-card1">
              <Link to="#" className="link hover-2">
                <img
                  src="https://via.placeholder.com/300x200"
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="The Internet of Behaviors (IoB)"
                  className="img-cover"
                />
                <div className="card-content">
                  <h4 className="headline headline-4 card-title">
                    <p>The Internet of Behaviors (IoB)</p>
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
              <Link to="./history-society/indian-society.html">
                <img
                  src="https://via.placeholder.com/300x200"
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
            "
                  className="img-cover"
                />
                <h2>Indian Society: A Mosaic of Diversity</h2>

                <p>
                  Indian society is a vibrant amalgamation of cultures,
                  traditions,
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
              <Link to="./science-tech/quantum-computing.html">
                <img
                  src="https://via.placeholder.com/300x200"
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
              "
                  className="img-cover"
                />
                <h2>Quantum Computers: The Next Frontier in Computing</h2>

                <p>Quantum computing is an emerging field of cutting-edge</p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
              <Link to="./science-tech/Beauty-and-Power-of-Mathematics.html">
                <img
                  src="https://via.placeholder.com/300x200"
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
              "
                  className="img-cover"
                />
                <h2>The Beauty and Power of Mathematics</h2>

                <p>
                  Mathematics can be divided into several fundamental branches,
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
              <Link to="">
                <img
                  src="https://via.placeholder.com/300x200"
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
              "
                  className="img-cover"
                />
                <h2>Unveiling the Mysteries of Quantum Computing</h2>

                <p>
                  Quantum computing represents a revolutionary leap in
                  computational capabilities.
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


export default Philosophy;