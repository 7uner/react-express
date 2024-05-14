import React, { useState } from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import Home from './pages/Home';
import About from './pages/About';
import CartPage from './pages/CartPage';
import TestProductPage from './pages/TestProductPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>

      <Routes>
        <Route path="/about" element={<About />}></Route>
      </Routes>

      <Routes>
        <Route path="/cart" element={<CartPage />}></Route>
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
