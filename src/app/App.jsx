import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CartPage from './pages/CartPage';
import TestPage from './pages/TestPage';
import TestPage1 from './pages/testpage1';
import SeeMore from './components/ProductCard/SeeMore';

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
        <Route path="/seeMore" element={<seeMore />} />
      </Routes>

      <Routes>
        <Route path="/test1" element={<TestPage1 />} />
      </Routes>
    </Router>
  );
}

export default App;
