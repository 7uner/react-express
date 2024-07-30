import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';
import { useState, useEffect } from 'react';
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
  //hook for fetching the entire producct list
  const [productList, setProductList] = useState([]);

  // function handler to add product to cart
  function handleAddToCart(ProductName) {
    //add our item to the cart list, update state
    setCart([
      ...cart,
      productList.filter((obj) => {
        return obj.name === ProductName;
      })[0],
    ]);
    //call the usestate function here
    setNumCartItems(NumCartItems + 1);
    if (NumCartItems >= 5) {
      setShow(false);
    }
  }

  //fetch product data
  useEffect(() => {
    fetch('http://localhost:3001/findAllProduct')
      .then((response) => response.json())
      .then((json) => setProductList(json))
      .then(() => console.log(productList))
      .catch((error) => console.error(error));
  }, []);

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
