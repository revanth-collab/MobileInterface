import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from './components/HomePage';
import SpaPage from './components/SpaPage';
import SalonPage from "./components/SalonPage";


// import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/spa" element={<SpaPage />} />
        <Route exact path="/salon" element={<SalonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
