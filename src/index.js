import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Correct import for BrowserRouter
import './index.css';
import App from './App';
import ScrollToTop from "./components/ScrollToTop.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <ScrollToTop />

    <App /> {/* Your main App component */}
  </BrowserRouter>
);

// reportWebVitals(); // Optional for performance tracking
