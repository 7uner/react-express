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
  console.log(cart);
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
              ></CartCard>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
