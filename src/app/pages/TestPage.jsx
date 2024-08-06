<<<<<<< Updated upstream
import NavBar from '../components/NavBar/NavBar';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';
import Footer from '../components/Footer/Footer';
import ProductCard from '../components/ProductCard/ProductCard';
=======
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";
>>>>>>> Stashed changes

function TestPage() {
  return (
    <div>
      <NavBar />
<<<<<<< Updated upstream
      <ProductCarousel />
      <ProductCard
        image={'src/app/Assets/MacBookPro.jpg'}
        ProductName={'Mac Book Pro 15th Gen'}
        ProductDes={'Get the latest Mac Book Pro with the Powerful M2 Chip!'}
        ProductPage={'#'}
      />
=======
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <ProductCarousel />
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-md-6">
            <ProductCard
              image="src/app/Assets/iPhone15Pro.webp"
              ProductName="iPhone 15"
              ProductDes="The latest iPhone"
            />
          </div>
        </div>
      </div>
>>>>>>> Stashed changes
      <Footer />
    </div>
  );
}

export default TestPage;
