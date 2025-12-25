import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SideMenu from "./components/menu/SideMenu.jsx";
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import TopMenu from "./components/menu/TopMenu.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Router>
          <App/>
      </Router>
  </StrictMode>,
)
