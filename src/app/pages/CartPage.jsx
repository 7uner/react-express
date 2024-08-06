<<<<<<< Updated upstream
import Cart from '../components/Cart/Cart';

function CartPage({ image, ProductName, ProductDes, ProductPage }) {
  return (
    <div>
      <Cart />
=======
import { useLocation, useHistory } from 'react-router-dom';

function CartPage() {
  const { state } = useLocation();
  const history = useHistory();

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

  const [cart, setCart] = useState(state?.itc || defaultCartItems);
  const [numCartItems, setNumCartItems] = useState(cart.length);

  function handleDeleteItem(productName) {
    const updatedCart = cart.filter((product) => product.name !== productName);
    setCart(updatedCart);
    setNumCartItems(updatedCart.length);
  }

  function handleProductClick(link) {
    history.push(link);
  }

  return (
    <div>
      <NavBar cartNum={numCartItems} itemInCart={cart} />
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
>>>>>>> Stashed changes
    </div>
  );
}

export default CartPage;
