import Welcome from '../components/Welcome/Welcome';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';

function Home() {
  const product = {
    name: 'iPhone 14',
    image: 'src/app/Assets/iPhone14.jpg',
    Description: 'Last Gen, Just as Good, fraction of the price',
    link: '#',
  };

  const productList = [
    {
      name: 'iPhone 14',
      image: 'src/app/Assets/iPhone14.jpg',
      Description: 'Last Gen, Just as Good, fraction of the price',
      link: '#',
    },
  ];

  function addToCart() {
    alert('added to Carat!');
  }
  return (
    <div>
      <NavBar />
      <div className="container text-center">
        <div className="row">
          <h1 className="display-2">
            Find the Latest Tech for the Best Price!
          </h1>
        </div>
        <div className="row">
          <ProductCarousel />
        </div>
        <div className="row">
          <div className="col-12">
            <ProductCard
              image={'src/app/Assets/MacBookPro.jpg'}
              ProductName={'Mac Book Pro 15th Gen'}
              ProductDes={
                'Get the latest Mac Book Pro with the Powerful M2 Chip!'
              }
              ProductPage={'#'}
              addToCart={addToCart}
            />
          </div>
          <div className="col-4">
            <ProductCard
              image={'src/app/Assets/iPhone15Pro.webp'}
              ProductName={'iPhone 15 Pro'}
              ProductDes={'Get the latest iPhone 15 Pro!'}
              ProductPage={'#'}
            />
          </div>
          <div className="col-4">
            <ProductCard
              image={'src/app/Assets/iPad10th.jpg'}
              ProductName={'iPhone 10th Gen'}
              ProductDes={'Get the latest iPad 10th Gen!'}
              ProductPage={'#'}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <ProductCard
              image={'src/app/Assets/AirPodsMax.jpg'}
              ProductName={'Air Pods Max'}
              ProductDes={'these wont fall out of your ears!'}
              ProductPage={'#'}
            />
          </div>
          <div className="col-4">
            <ProductCard
              image={product.image}
              ProductName={product.name}
              ProductDes={product.Description}
              ProductPage={product.link}
            />
          </div>
          <div className="col-4">
            <ProductCard
              image={'src/app/Assets/AirPodsMax.jpg'}
              ProductName={'Air Pods Max'}
              ProductDes={'these wont fall out of your ears!'}
              ProductPage={'#'}
            />
          </div>
        </div>
        <div className="row">
          {productList.map((product, i) => (
            <div key={i} className="col-4">
              <ProductCard
                image={product.image}
                ProductName={product.name}
                ProductDes={product.Description}
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

export default Home;
