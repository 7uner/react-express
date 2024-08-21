import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';
import productList from '../data/productList';

function TestPage1() {
  return (
    <div>
      <NavBar cart={[]} cartNum={0} />
      <div className="container">
        <div className="row animate__animated animate__backInDown">
          <ProductCarousel></ProductCarousel>
        </div>
      </div>
      <div className="row animate__animated animate__bounceIn">
        {productList.map((product, i) => (
          <div className="col-4" key={i}>
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
  );
}

export default TestPage1;
