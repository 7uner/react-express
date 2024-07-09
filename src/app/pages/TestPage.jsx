import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';

function TestPage() {
  return (
    <div>
      <NavBar />
      <div className="w-75 mx-auto">
        <ProductCarousel />
      </div>
      <div className="w-25">
        <ProductCard
          image={'src/app/Assets/iPhone15Pro.webp'}
          ProductName={'iPhone 15'}
          ProductDes={'The latest iPhone'}
        />
      </div>
      <Footer />
    </div>
  );
}

export default TestPage;
