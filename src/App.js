/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import Footer from "./components/footer.jsx";
import Email from "./components/email";
import Discoveries from "./pages/discoveries.jsx";
import Science_Tech from "./pages/science-tech.jsx";
// import Philosophy from "./pages/philosophy.jsx";
import Animals_Earth from "./pages/animals-earth.jsx";
import History_Society from "./pages/history-society.jsx";
import About from "./pages/others-pages/about.jsx";
import PrivacyPolicy from "./pages/others-pages/privacy-policy.jsx";
import ContactUs from "./pages/others-pages/contact.jsx";
import TermsAndConditions from "./pages/others-pages/termsAndConditions";


// ..............
import Article1 from "./pages/ArticlePage/heart-attacks-link-cancer.jsx";
import Article2 from "./pages/ArticlePage/internet-groth.jsx";
import Article3 from "./pages/ArticlePage/artificial-testicles.jsx";
import Article4 from "./pages/ArticlePage/challenge-in-scientists.jsx";

import Article5 from "./pages/ArticlePage/what-is-web3.jsx";
import Article6 from "./pages/ArticlePage/battery-chemistry.jsx";
import Article7 from "./pages/ArticlePage/lithium-batteries.jsx";
import Article8 from "./pages/ArticlePage/maths1.jsx";
import Article9 from "./pages/ArticlePage/quantum-computing.jsx";

import Article10 from "./pages/ArticlePage/origins-of-chess.jsx";
import Article11 from "./pages/ArticlePage/history-of-india.jsx";
import Article12 from "./pages/ArticlePage/model-society.jsx";
import Article13 from "./pages/ArticlePage/indian-society.jsx";

import Article14 from "./pages/ArticlePage/animals-on-earth.jsx";
import Article15 from "./pages/ArticlePage/house-sparrow.jsx";
import Article16 from "./pages/ArticlePage/climate-change.jsx";



function App() {
  return (
    <div>
      {/* Navbar is always displayed */}
      <Navbar />

      {/* Scroll to top on route change */}

      {/* Define your Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Discoveries" element={<Discoveries />} />
        <Route path="/Science_Tech" element={<Science_Tech />} />
        <Route path="/History_Society" element={<History_Society />} />
        <Route path="/Animals_Earth" element={<Animals_Earth />} />
        {/* <Route path="/Philosophy" element={<Philosophy />} /> */}
        <Route path="/About" element={<About />} />
        <Route path="/Email" element={<Email />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />


        {/* //ArticlesNew */}
        <Route path="/discoveries/heart-attacks-link-cancer" element={<Article1/>} />
        <Route path="/discoveries/internet-groth" element={<Article2/>} />
        <Route path="/discoveries/artificial-testicles" element={<Article3/>} />
        <Route path="/discoveries/challenge-in-scientists" element={<Article4/>} />

        <Route path="/Science_Tech/what-is-web3" element={<Article5/>} />
        <Route path="/Science_Tech/battery-chemistry" element={<Article6/>} />
      <Route path="/Science_Tech/lithium-batteries" element={<Article7/>} />
      <Route path="/Science_Tech/maths1" element={<Article8/>} />
      <Route path="/Science_Tech/quantum-computing" element={<Article9/>} />

      <Route path="/History_Society/origins-of-chess" element={<Article10/>} />
      <Route path="/History_Society/history-of-india" element={<Article11/>} />
      <Route path="/History_Society/model-society" element={<Article12/>} />
      <Route path="/History_Society/indian-society" element={<Article13/>} />

      <Route path="/Animals_Earth/animals-on-earth/" element={<Article14/>} />
      <Route path="/Animals_Earth/house-sparrow/" element={<Article15/>} />
      <Route path="/Animals_Earth/climate-change/" element={<Article16/>} />

      </Routes>

      {/* Footer is always displayed */}
      <Footer />
    </div>
  );
}




export default App;
