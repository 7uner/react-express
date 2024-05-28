import Cart from '../components/Cart/Cart';
import NavBar from '../components/NavBar/NavBar';
import ProductBar from '../components/NavBar/ProductBar';
import CartCard from '../components/ProductCard/CartCard';
import Footer from '../components/Footer/Footer';

function CartPage({ image, ProductName, ProductDes, ProductPage }) {
function CartPage({}) {
  return (
    <div>
      <Cart />
      <NavBar />
      <ProductBar />
      <CartCard
        img="src\app\Assets\MacBookPro.jpg"
        name="Mac Book Pro"
        des="Last Gen, Just as Good, fraction of the price"
        price={2999.99}
        shipping={10}
      />
      <Footer />
    </div>
  );
}

export default CartPage;