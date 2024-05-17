import NavBar from '../components/NavBar/NavBar';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';
import Footer from '../components/Footer/Footer';
import ProductCard from '../components/ProductCard/ProductCard';
import Accordian from '../components/NavBar/Accordian';

function TestPage() {
  return (
    <div>
      <Accordian />
      <NavBar />
      <ProductCarousel />
      <ProductCard
        image={'src/app/Assets/MacBookPro.jpg'}
        ProductName={'Mac Book Pro 15th Gen'}
        ProductDes={'Get the latest Mac Book Pro with the Powerful M2 Chip!'}
        ProductPage={'#'}
      />
      <Footer />
    </div>
  );
}

export default TestPage;
