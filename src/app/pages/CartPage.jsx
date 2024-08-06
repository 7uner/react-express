import React, { useState } from 'react';
import Footer from '../components/Footer/Footer';
import ProductCardCart from '../components/ProductCard/ProductCardCart';
import NavBar from '../components/NavBar/NavBar';
import { useLocation } from 'react-router-dom';

function CartPage() {
  const { state } = useLocation();

  const defaultItems = [
    {
      name: 'Product 1',
      description: 'Description 1',
      image: 'src/app/Assets/iPhone15Pro.webp',
      link: 'hihihi',
      itemNumber: 1,
    },
    {
      name: 'Product 2',
      description: 'Description 2',
      image: 'src/app/Assets/MacBookPro.jpg',
      link: 'hihihi',
      itemNumber: 1,
    },
  ];

  const [cart, setCart] = useState(state?.itc || defaultItems);
  const [totalItems, setTotalItems] = useState(cart.reduce((acc, item) => acc + item.itemNumber, 0));

  const removeItem = (productName) => {
    const updatedCart = cart.filter((product) => product.name !== productName);
    setCart(updatedCart);
    setTotalItems(updatedCart.reduce((acc, item) => acc + item.itemNumber, 0));
  };

  const updateItemNumber = (productName, itemNumber) => {
    const updatedCart = cart.map((product) =>
      product.name === productName ? { ...product, itemNumber } : product
    );
    setCart(updatedCart);
    setTotalItems(updatedCart.reduce((acc, item) => acc + item.itemNumber, 0));
  };

  return (
    <div>
      <NavBar cartNum={totalItems} itemInCart={cart} />
      <div className="container">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((product, index) => (
            <div key={index} className="row mb-3">
              <div className="col">
                <ProductCardCart
                  image={product.image}
                  name={product.name}
                  description={product.description}
                  link={product.link}
                  removeItem={removeItem}
                  updateItemNumber={updateItemNumber}
                />
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
