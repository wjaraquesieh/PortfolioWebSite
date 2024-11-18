import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Resources from './pages/Resources';
import Setup from './pages/Setup';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/setup" element={<Setup />} />
      </Routes>
    </Router>
  );
};

export default App;
