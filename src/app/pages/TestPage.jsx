import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';
import productList from '../data/productList';

function TestPage() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row ani_backInDown">
          <ProductCarousel />
        </div>
        <div className="row">
          {productList.map((product, i) => (
            <div className="col-6 ani_fadeInRight" key={i}>
              <ProductCard
                image={product.image}
                ProductDes={product.Description}
                ProductName={product.name}
                ProductPage={product.link}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TestPage;
