import NavBar from '../components/NavBar/NavBar';
import ProductBar from '../components/NavBar/ProductBar';
import CartCard from '../components/ProductCard/CartCard';
import Footer from '../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function CartPage({}) {
  const { state } = useLocation();
  const [cartNum, setCartNum] = useState(state ? state.cn : 0);
  const [cart, setCart] = useState(state ? state.itc : []);
  console.log(state.itc);

  function handleDeleteCart(product) {
    setCart(cartNum - 1);
    setCart(
      cart.filter((obj) => {
        return obj.name !== product;
      })
    );
  }
  return (
    <div>
      <NavBar />
      <ProductBar />
      <div className="container">
        {state.itc.map((product, i) => (
          <div className="row" key="i">
            <div className="col" key="i">
              <CartCard
                img={product.image}
                name={product.name}
                des={product.Description}
                price={'99.99'}
                shipping={'9.99'}
                handleDelete={handleDeleteCart}
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
