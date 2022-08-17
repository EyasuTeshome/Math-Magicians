import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Calculator from './components/Calculator/Calculator';
import Home from './components/Home/Home';
import Quote from './components/Quote/Quote';
import Navbar from './components/Navbar/Navbar';

import './App.css';

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
