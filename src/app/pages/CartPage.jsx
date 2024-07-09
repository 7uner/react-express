import NavBar from '../components/NavBar/NavBar';
import ProductBar from '../components/NavBar/ProductBar';
import CartCard from '../components/ProductCard/CartCard';
import Footer from '../components/Footer/Footer';
import { useLocation } from 'react-router-dom';

function CartPage({}) {
  const { state } = useLocation();
  console.log(state.itc);
  return (
    <div>
      <NavBar />
      <ProductBar />
      <div className="container">
        {state.itc.map((product, i) => (
          <div className="row" key="i">
            <div className="col" key="i">
              <CartCard
                image={product.image}
                name={product.name}
                des={product.Description}
                price={'99.99'}
                shipping={'9.99'}
              ></CartCard>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        {productList.map((product, i) => (
          <div className="col-4" key={i}>
            <ProductCard
              image={product.image}
              ProductDes={product.Description}
              ProductName={product.name}
              ProductPage={product.link}
              addToCart={handleAddToCart}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
