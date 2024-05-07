import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';

function App() {
  const [count, setCount] = useState(0);

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
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
