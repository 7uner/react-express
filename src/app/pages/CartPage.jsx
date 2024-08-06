import Footer from '../components/Footer/Footer';
import ProductCardCart from '../components/ProductCard/ProductCardCart';
import NavBar from '../components/NavBar/NavBar';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CartPage() {
  //delete hook
  const [cart, setCart] = useState([]);
  //num iten in cart hook
  const [numCartItems, setNumCartItems] = useState(0);

  //fetch product data
  useEffect(() => {
    fetch('http://localhost:3001/getCart')
      .then((response) => response.json())
      .then((json) => setCart(json))
      .catch((error) => console.error(error));
  }, []);

  //delete event handler
  function handleDeleteItem(productID) {
    fetch('http://localhost:3001/deleteProduct/' + productID)
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.error(error));

    fetch('http://localhost:3001/getCart')
      .then((response) => response.json())
      .then((json) => setCart(json))
      .catch((error) => console.error(error));
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
                deleteItem={handleDeleteItem}
                price={product.price}
                quantity={product.qty}
                productID={product.id}
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
