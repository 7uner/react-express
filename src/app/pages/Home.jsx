import Welcome from '../components/Welcome/Welcome';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import ProductCard from '../components/ProductCard/ProductCard';

function Home() {
  return (
    <div>
      <NavBar />
      <div className="container text-center">
        <div className="row">
          <div className="col-3">
            <ProductCard
              image={'src/app/Assets/MacBookPro.jpg'}
              ProductName={'Mac Book Pro 15th Gen'}
              ProductDes={
                'Get the latest Mac Book Pro with the Powerful M2 Chip!'
              }
              ProductPage={'#'}
            />
          </div>
          <div className="col-3">
            <ProductCard
              image={'src/app/Assets/iPhone15Pro.webp'}
              ProductName={'iPhone 15 Pro'}
              ProductDes={'Get the latest iPhone 15 Pro!'}
              ProductPage={'#'}
            />
          </div>
          <div className="col-3">
            <ProductCard
              image={'src/app/Assets/iPad10th.jpg'}
              ProductName={'iPhone 10th Gen'}
              ProductDes={'Get the latest iPad 10th Gen!'}
              ProductPage={'#'}
            />
          </div>
          <div className="col-3">
            <ProductCard
              image={'src/app/Assets/AirPodsMax.jpg'}
              ProductName={'Air Pods Max'}
              ProductDes={'these wont fall out of your ears!'}
              ProductPage={'#'}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
