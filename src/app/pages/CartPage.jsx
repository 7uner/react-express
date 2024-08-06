import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import ProductCardCart from '../components/ProductCard/ProductCardCart';
import { useLocation, useHistory } from 'react-router-dom';
import { useState } from 'react';
import Cart from '../components/Cart/Cart';

function CartPage() {
  const { state } = useLocation();
  const history = useHistory();

  // Default cart items if state is undefined
  const defaultCartItems = [
    { 
      name: 'Product 1', 
      description: 'Description 1', 
      image: 'src/app/Assets/iPhone15Pro.webp', 
      link: '/product/1' // Example link to a product detail page
    },
    { 
      name: 'Product 2', 
      description: 'Description 2', 
      image: 'src/app/Assets/MacBookPro.jpg', 
      link: '/product/2' // Example link to a product detail page
    },
  ];

  // Use state hooks for cart and number of items
  const [cart, setCart] = useState(state?.itc || defaultCartItems);
  const [numCartItems, setNumCartItems] = useState(cart.length);

  // Delete event handler
  function handleDeleteItem(productName) {
    const updatedCart = cart.filter((product) => product.name !== productName);
    setCart(updatedCart);
    setNumCartItems(updatedCart.length);
  }

  // Handle navigation to product page
  function handleProductClick(link) {
    history.push(link);
  }

  return (
    <div>
      <NavBar cartNum={numCartItems} itemInCart={cart} />
      <Cart />
      <div className="container">
        {cart.map((product, index) => (
          <div key={index} className="row mb-3">
            <div className="col">
              <ProductCardCart
                image={product.image}
                ProductName={product.name}
                ProductDes={product.description || product.Description}
                ProductPage={product.link}
                deleteItem={handleDeleteItem}
                onClick={() => handleProductClick(product.link)} // Handle click for navigation
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
