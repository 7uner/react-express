import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';
import ProductBar from '../components/NavBar/ProductBar';
import productList from '../data/productList';

function Home() {
  // use loccation to recieve data from other routes
  const { state } = useLocation();
  // state hook to handle number of items in cart
  const [cartNum, setCartNum] = useState(state ? state.cn : 0);
  // state hook for items in cart
  const [cart, setCart] = useState(state ? state.itc : []);

  function handleAddToCart(productName) {
    setCartNum(cartNum + 1);
    // set a flag to denote if we made any changes during the mapping
    var changed = false;
    // map through the producct list to see if the product being added is already there
    const nextProducts = cart.map((product) => {
      if (product.name === productName) {
        // product exsists, update quantity and set changed to true
        changed = true;
        return { ...product, quantity: product.quantity + 1 };
      } else {
        // no match, just return product
        return product;
      }
    });
    // if changed is false here, then we did not update during mapping, so must be a new product
    if (!changed) {
      setCart([
        ...cart,
        productList.filter((obj) => {
          return obj.name === productName;
        })[0],
      ]);
    } else {
      setCart(nextProducts);
    }
  }

  return (
    <div>
      <NavBar cart={cart} cartNum={cartNum} />
      <ProductBar />
      <div className="container text-center">
        <div className="row">
          <h1 className="display-2 animate__animated animate__bounce">
            Find the Latest Tech for the Best Price!
          </h1>
        </div>
        <div className="row">
          <ProductCarousel />
        </div>
        <div className="row">
          {productList.map((product, i) => (
            <div className="col-4 ani_bounce" key={i}>
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
