import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/NavBar/Footer';
import Cart from '../components/Cart/Cart';
import ProductCardCart from '../components/ProductCard/ProductCardCart';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function CartPage() {
  //fetching the cart list passed in from previous page
  const { state } = useLocation();
  //delete hook
  const [cart, setCart] = useState(state.itc);
  //num iten in cart hook
  const [numCartItems, setNumCartItems] = useState(state.cn);
  //delete event handler
  function handleDeleteItem(productName) {
    setCart(
      cart.filter((obj) => {
        return obj.name !== productName;
      })
    );
    setNumCartItems(numCartItems - 1);
  }
  console.log(handleDeleteItem);
  return (
    <div>
      <NavBar cartNum={numCartItems} itemInCart={cart} />
      <div className="container">
        {cart.map((product, i) => (
          <div key={i} className="row">
            <div key={i} className="col">
              <ProductCardCart
                image={product.image}
                ProductName={product.name}
                ProductDes={product.Description}
                ProductPage={product.link}
                addToCart={handleDeleteItem}
              />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
