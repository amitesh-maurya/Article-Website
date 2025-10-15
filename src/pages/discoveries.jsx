/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

import Latest from "../components/latest"; // Import Latest component
import SuperTitle from "../components/superTitle";
import heart from "./../images/Discoveries/heart.png";
import internet6 from "./../images/Technology/5g network credite- investindia.gov.in.jpeg";
import testicle1 from "./../images/Discoveries/Test Tube Human.png";
import scientists from "./../images/Technology/scientists.jpeg";
function Discoveries() {
  return (
    <div className="container-super">
      <SuperTitle title=" Discoveries" />

      {/* Default page cards */}
      <div className="grid-container">
        <div className="card">
          <Link to="heart-attacks-link-cancer">
            <img src={heart} alt="ARPANET" />
            <h2>There is a link Between Heart attacks and Cancer.</h2>
            <p>
              Researchers show that factor-rich microscopic particles escape
              from the healing heart and travel through the bloodstream to reach
              existing tumors.
            </p>
          </Link>
        </div>

        <div className="card">
          <Link to="internet-groth">
            <img src={internet6} alt="ARPANET" />
            <h2>The Internet: A Discovery That Connected the World</h2>
            <p>
              The Internet has transformed the world, connecting people,
              information, and resources in unprecedented ways.
            </p>
          </Link>
        </div>
{/* // Popularcard */}
        <div className="popular-card">
          <h2>Popular</h2>
          <ul>
            <div className="popular-card1">
              <Link to="heart-attacks-link-cancer" className="link hover-2">
                <img
                  src={heart}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="The Internet of Behaviors (IoB)"
                  className="img-cover"
                />
                <div className="card-content">
                  <h4 className="headline headline-4 card-title">
                    <p>There is a link Between Heart attacks and Cancer</p>
                  </h4>
                </div>
              </Link>
            </div>

            <div className="popular-card1">
              <Link to="internet-groth" className="link hover-2">
                <img
                  src={internet6}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="The Internet of Behaviors (IoB)"
                  className="img-cover"
                />
                <div className="card-content">
                  <h4 className="headline headline-4 card-title">
                    <p>The Internet: A Discovery That Connected the World</p>
                  </h4>
                </div>
              </Link>
            </div>

            <div className="popular-card1">
              <Link to="artificial-testicles" className="link hover-2">
                <img
                  src={testicle1}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="The Internet of Behaviors (IoB)"
                  className="img-cover"
                />
                <div className="card-content">
                  <h4 className="headline headline-4 card-title">
                    <p>Reproductive Science: Test-Tube Testes</p>
                  </h4>
                </div>
              </Link>
            </div>

            <div className="popular-card1">
              <Link to="challenge-in-scientists" className="link hover-2">
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
                    <p>Facing the Challenges in the Scientists Community</p>
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
              <Link to="artificial-testicles">
                <img
                  src={testicle1}
                  width="200"
                  height="150"
                  loading="lazy"
                  alt="
                  "
                  className="img-cover"
                />
                <h2> Reproductive Science: Test-Tube Testes</h2>

                <p>
                Researchers developing the world's first "test-tube testes," which are lab-created gonads made from authentic testicular cells.
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
              <Link to="challenge-in-scientists">
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

                <p>The scientific community is growing in importance by the day, but at the same time, the challenges in science are increasing exponentially</p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
            <Link to="internet-groth">
            <img src={internet6} 
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
                information, and resources in unprecedented ways.
                </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="card1">
            <Link to="heart-attacks-link-cancer">
            <img src={heart}
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
              from the healing heart and travel through the bloodstream to reach
              existing tumors.
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

export default Discoveries;
