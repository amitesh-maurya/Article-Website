/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

import "./latest.css"; // Import CSS for styling

import climate1 from "./../images/Earth/Untitled (2).jpeg"
import internet6 from "./../images/Technology/5g network credite- investindia.gov.in.jpeg";
import chess1 from "./../images/History/chess history.jpeg";
import math1 from "./../images/Technology/maths cretiteNborzova  Dreamstimecom.jpeg";

function Latest() {
  return (

<div className="latests">

{/* <!-- br --> */}
<div>
        <h6 className="subjects"></h6>
        <h2 className="subjectsH">Latests</h2>
      </div>

      <div className="latests-post-flex">
        <div className="latests-post2">
          <Link to="/Animals_Earth/climate-change/">
            <img
              src={climate1}
              width="300"
              height=""
              loading="lazy"
              alt="
                       "
              className="img-cover"
            />

            <div className="latests-post2-content">
              <h5>Animals & Earth</h5>

              <h2>Climate Change (Global Warming)
              </h2>

              <p>
              Present-day climate change refers to both global warming—the ongoing increase in the average global temperature
              </p>
            </div>
          </Link>
        </div>

        <div className="latests-post2">
          <Link to="/discoveries/internet-groth">
            <img
              src={internet6}
              width="300"
              height="200"
              loading="lazy"
              alt="
            "
              className="img-cover"
            />

            <div className="latests-post2-content">
              <h5>Discoveries</h5>

              <h2>The Internet: A Discovery That Connected the World
              </h2>

              <p>
              The Internet has transformed the world, connecting people, information, and resources in unprecedented way
              </p>
            </div>
          </Link>
        </div>

        <div className="latests-post2">
          <Link to="/History_Society/origins-of-chess">
            <img
              src={chess1}
              width="300"
              height="200"
              loading="lazy"
              alt="
            "
              className="img-cover"
            />

            <div className="latests-post2-content">
              <h5>History & Society

</h5>

              <h2>The Fascinating Origins of Chess
              </h2>

              <p>
              Chess has been played for more than 1,500 years. It was invented in India in the 6th century CE,
              </p>
            </div>
          </Link>
        </div>
        <div className="latests-post2">
          <Link to="/Science_Tech/maths1">
            <img
              src={math1}
              width="300"
              height="200"
              loading="lazy"
              alt="
                      "
              className="img-cover"
            />

            <div className="latests-post2-content">
              <h5>Subjects</h5>

              <h2>The Beauty and Power of Mathematics
              </h2>

              <p>
              Mathematics serves as a fundamental principle in many natural phenomena
              </p>
            </div>
          </Link>
        </div>
        {/* <!-- <Link to="#" className="btn2 btn-secondary">
        <span className="span">More &raquo;</span>
      </Link> --> */}
      </div>
</div>



  );
}
export default Latest;