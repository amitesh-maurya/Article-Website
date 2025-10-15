/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

import Latest from "../components/latest"; // Import Latest component
import SuperTitle from "../components/superTitle";
import chess1 from "./../images/History/chess history.jpeg";
import india1 from "./../images/History/indian -vally.jpeg";
import msimg2 from "./../images/Society/socity schecher.jpeg"
import isimg1 from "./../images/Society/indian-culcher -credite India Imprints.jpeg"


function History_Society(){

    return(
        <div className="container-super">
<SuperTitle title=" History & Society" />


      {/* Default page cards */}
      <div className="grid-container">
        <div className="card">
          <Link to="origins-of-chess">
            <img src={chess1} alt="ARPANET" />
            <h2>The Fascinating Origins of Chess  </h2>
            <p>
            Chess has been played for more than 1,500 years. It was invented in India in the 6th century CE,
            </p>
          </Link>
        </div>

        <div className="card">
          <Link to="history-of-india">
            <img src={india1} alt="ARPANET" />
            <h2>History of India: A Journey Through Time
            </h2>
            <p>
            One of the earliest urban civilizations, the Indus Valley Civilization thrived in what is now Pakistan and northwest India
            </p>
          </Link>
        </div>

        <div className="popular-card">
          <h2>Popular</h2>
          <ul>
            <div className="popular-card1">
            <Link to="origins-of-chess">
            <img src={chess1}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="The Internet of Behaviors (IoB)"
                  className="img-cover"
                />
                <div className="card-content">
                  <h4 className="headline headline-4 card-title">
                    <p>The Fascinating Origins of Chess </p>
                  </h4>
                </div>
              </Link>
            </div>

            <div className="popular-card1">
            <Link to="history-of-india">
            <img src={india1}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="The Internet of Behaviors (IoB)"
                  className="img-cover"
                />
                <div className="card-content">
                  <h4 className="headline headline-4 card-title">
                    <p>History of India: A Journey Through Time
                    </p>
                  </h4>
                </div>
              </Link>
            </div>

            <div className="popular-card1">
              <Link to="model-society" className="link hover-2">
                <img
                  src={msimg2}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="The Internet of Behaviors (IoB)"
                  className="img-cover"
                />
                <div className="card-content">
                  <h4 className="headline headline-4 card-title">
                    <p>Building a Better Society: Harmony and Progress</p>
                  </h4>
                </div>
              </Link>
            </div>

            <div className="popular-card1">
              <Link to="indian-society" className="link hover-2">
                <img
                  src={isimg1}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="The Internet of Behaviors (IoB)"
                  className="img-cover"
                />
                <div className="card-content">
                  <h4 className="headline headline-4 card-title">
                    <p>Indian Society: A Mosaic of Diversity</p>
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
            <Link to="origins-of-chess">
            <img src={chess1}
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
                Chess has been played for more than 1,500 years. It was invented in India in the 6th century CE
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
            <Link to="history-of-india">
            <img src={india1}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
              "
                  className="img-cover"
                />
                <h2>History of India: A Journey Through Time
                </h2>

                <p>One of the earliest urban civilizations, the Indus Valley Civilization thrived in what is now Pakistan and northwest India.</p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
              <Link to="model-society">
                <img
                  src={msimg2}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
              "
                  className="img-cover"
                />
                <h2>Building a Better Society: Harmony and Progress</h2>

                <p>
                A just society guarantees equal opportunities for everyone, irrespective of gender, religion, ethnicity, or socio-economic status.
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
              <Link to="indian-society">
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
      <div className="latest-content">
        <Latest /> {/* This will render the Latest component directly here */}
      </div>
      </div>

    );
}


export default History_Society;