import Cart from '../components/Cart/Cart';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

function CartPage({ image, ProductName, ProductDes, ProductPage }) {
  return (
    <div>
      <NavBar />
      <Cart />
      <Footer />
    </div>
  );
}

export default CartPage;
