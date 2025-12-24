import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Letter from './pages/Letter';
import Reasons from './pages/Reasons';
import MagicBackground from './components/MagicBackground';

function App() {
  return (
    <Router>
      <MagicBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/reasons" element={<Reasons />} />
      </Routes>
    </Router>
  );
}

export default App;
