import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import TestPage from './pages/TestPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cart" element={<CartPage />} />
<<<<<<< Updated upstream
      </Routes>

      <Routes>
        <Route path="/test" element={<TestPage />} />
=======
        <Route path="/product" element={<TestProductPage />} />
        <Route path="/product1" element={<ProductPage />} />
>>>>>>> Stashed changes
      </Routes>

    </Router>
  );
}

export default App;
