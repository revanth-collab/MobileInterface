import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from './components/HomePage';
import SpaPage from './components/SpaPage';


// import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/spa" element={<SpaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
