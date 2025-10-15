/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

import Latest from "../components/latest"; // Import Latest component
import SuperTitle from "../components/superTitle";
import biodiversity from "./../images/Animals/animals-Biodiversity  impact on the climate crisis.png";

import sparrow1 from "./../images/Animals/goreya credite bird aroun me.jpeg";
import climate1 from "./../images/Earth/Untitled (2).jpeg"

const Animals_Earth = () => {
  return (
    <div className="container-super">
      <SuperTitle title="Animals & Earth" />

      {/* Default page cards */}
      <div className="grid-container">
        <div className="card">
          <Link to="animals-on-earth">
            <img src={biodiversity} alt="The Vital Role of Animals on Earth
" />
            <h2>The Vital Role of Animals on Earth
            </h2>
            <p>
            Animals are essential for maintaining the balance of ecosystems and enriching life on Earth
            </p>
          </Link>
        </div>

        <div className="card">
          <Link to="climate-change">
            <img src={climate1} alt="ARPANET" />
            <h2>Climate Change (Global Warming)
            </h2>
            <p>
            Present-day climate change refers to both global warming—the ongoing increase in the average global temperature
            </p>
          </Link>
        </div>

        <div className="popular-card">
          <h2>Popular</h2>
          <ul>
            <div className="popular-card1">
              <Link to="animals-on-earth" className="link hover-2">
                
                   <img src={biodiversity}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="The Internet of Behaviors (IoB)"
                  className="img-cover"
                />
                <div className="card-content">
                  <h4 className="headline headline-4 card-title">
                    <p>The Vital Role of Animals on Earth</p>
                  </h4>
                </div>
              </Link>
            </div>

            <div className="popular-card1">
              <Link to="house-sparrow" className="link hover-2">
                <img
                  src={sparrow1}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="The Internet of Behaviors (IoB)"
                  className="img-cover"
                />
                <div className="card-content">
                  <h4 className="headline headline-4 card-title">
                    <p>House sparrow
                    </p>
                  </h4>
                </div>
              </Link>
            </div>

            <div className="popular-card1">
              <Link to="climate-change" className="link hover-2">
                <img
                  src={climate1}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="The Internet of Behaviors (IoB)"
                  className="img-cover"
                />
                <div className="card-content">
                  <h4 className="headline headline-4 card-title">
                    <p>Climate Change (Global Warming)
                    </p>
                  </h4>
                </div>
              </Link>
            </div>

            <div className="popular-card1">
              <Link to="animals-on-earth" className="link hover-2">
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
              <Link to="animals-on-earth">
              <img src={biodiversity}

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
                Animals are essential for maintaining the balance of ecosystems and enriching life on Earth.
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
              <Link to="house-sparrow">
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

                <p> The house sparrow is closely associated with human habitation and can thrive in both urban and rural environments</p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
              <Link to="climate-change">
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
            <Link to="house-sparrow">
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

                <p> The house sparrow is closely associated with human habitation and can thrive in both urban and rural environments</p>
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
};

export default Animals_Earth;
