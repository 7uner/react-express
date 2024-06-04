import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/NavBar/Footer';
import ProductCard from '../components/ProductCard/ProductCard';
import PCarousel from '../components/PCarousel/PCarousel';
import productList from '../Data/ProductData';
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

  function handleAddToCart(ProductName) {
    //add our item to the cart list, update state

    setCart([
      ...cart,
      productList.filter((obj) => {
        return obj.name === ProductName;
      })[0],
    ]);
    //alert('added to Cart!');
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
          <h1>
            {show
              ? 'You have ' + NumCartItems + ' items in cart!'
              : 'You have a lot of items in cart!'}
          </h1>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col-6">
            <PCarousel />
          </div>
          <div className="col"> </div>
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
        <Footer />
      </div>
    </div>
  );
}

export default Home;
