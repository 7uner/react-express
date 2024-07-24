import NavBar from '../components/NavBar/NavBar';
import ProductBar from '../components/NavBar/ProductBar';
import CartCard from '../components/ProductCard/CartCard';
import Footer from '../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function CartPage() {
  const { state } = useLocation();
  const [cartNum, setCartNum] = useState(state ? state.cn : 0);
  const [cart, setCart] = useState(state ? state.itc : []);
  const [cartPrice, setCartPrice] = useState(0);

  function handleDeleteCart(productName) {
    setCartNum(cartNum - 1);
    setCart(
      cart.filter((product) => {
        return product.name !== productName;
      })
    );
  }

  return (
    <div>
      <NavBar cart={cart} cartNum={cartNum} />
      <ProductBar />
      <div className="container">
        {cart.map((product, i) => (
          <div className="row" key={i}>
            <div className="col">
              <CartCard
                img={product.image}
                name={product.name}
                des={product.Description}
                price={product.price}
                shipping={'9.99'}
                quantity={product.quantity}
                handleDelete={handleDeleteCart}
              ></CartCard>
            </div>
          </div>
        ))}
        <div className="card">
          <h1 className="card-title ms-auto">Subtotal: ${cartPrice}</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
