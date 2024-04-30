import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CartPage from './pages/CartPage';
import TestProductPage from './pages/TestProductPage';
import ProductPage from './pages/ProductPage';

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
        <Route path="/product" element={<TestProductPage />} />
      </Routes>

      <Routes>
        <Route path="/product1" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
