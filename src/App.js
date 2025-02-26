import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import './styles/tailwind.css';
import './styles/font.css';
import './styles/index.css';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export  {App};
