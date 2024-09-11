import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CartPage from './pages/CartPage';
import TestPage from './pages/TestPage';
import Feedback from './pages/Feedback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>

      <Routes>
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <Routes>
        <Route path="/test" element={<TestPage />} />
      </Routes>

      <Routes>
        <Route path="/form" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;
