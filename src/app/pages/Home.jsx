import { useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';
import ProductBar from '../components/NavBar/ProductBar';
import productList from '../data/productList';

function Home() {
  // state hook to handle number of items in cart
  const [cartNum, setCartNum] = useState(0);

  function handleAddToCart() {
    setCartNum(cartNum + 1);
  }

  return (
    <div>
      <NavBar />
      <ProductBar />
      <div className="container text-center">
        <div className="row">
          <h1 className="display-2">
            Find the Latest Tech for the Best Price!
          </h1>
          <h2>You have {cartNum} items in cart</h2>
        </div>
        <div className="row">
          <ProductCarousel />
        </div>
        <div className="row">
          {productList.map((product, i) => (
            <div className="col-4">
              <ProductCard
                image={product.image}
                ProductDes={product.Description}
                ProductName={product.name}
                ProductPage={product.link}
                addToCart={handleAddToCart}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
