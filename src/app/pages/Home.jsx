import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';
import productList from '../data/productData';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  // location for perserving global data
  const { state } = useLocation();
  //hook for disply of no. of items in cart
  const [NumCartItems, setNumCartItems] = useState(state ? state.cn : 0);
  //hook for cart item title display
  const [show, setShow] = useState(true);
  //hook for adding product to cart list
  const [cart, setCart] = useState(state ? state.itc : []);

  // function handler to add product to cart
  function handleAddToCart(ProductName) {
    //add our item to the cart list, update state
    setCart([
      ...cart,
      productList.filter((obj) => {
        return obj.name === ProductName;
      })[0],
    ]);
    console.log(cart);
    //call the usestate function here
    setNumCartItems(NumCartItems + 1);
    if (NumCartItems >= 5) {
      setShow(false);
    }
  }
  return (
    <div>
      <NavBar cartNum={NumCartItems} itemInCart={cart} />
      <div className="container text-center">
        <div className="row">
          <h1 className="display-2">
            Find the Latest Tech for the Best Price!
          </h1>
        </div>
        <div className="row">
          <h1>
            {show
              ? 'You have ' + NumCartItems + ' items in cart!'
              : 'You have a lot of items in cart!'}
          </h1>
          <ProductCarousel />
        </div>
        <div className="row">
          {productList.map((product, i) => (
            <div key={i} className="col-4">
              <ProductCard
                image={product.image}
                ProductName={product.name}
                ProductDes={product.Description}
                ProductID={product.id}
                addToCart={handleAddToCart}
                itemInCart={state ? state.itc : []}
                cartNum={state ? state.cn : 0}
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
