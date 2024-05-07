import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import productList from '../data/productData';

function ProductPage() {
  const { state } = useLocation();
  // hooks for product options
  const [size, setSize] = useState(256);
  const [color, setColour] = useState('Silver');
  const [config, setConfig] = useState('Pro');
  const [price, setPrice] = useState(3299.99);
  const product = productList.filter((obj) => {
    return obj.id === '000';
  })[0];
  const gallery = [
    'src/app/Assets/2023MacBookProM3/MacBook_Pro_M3_Gallery_1.jpg',
    'src/app/Assets/2023MacBookProM3/MacBook_Pro_M3_Gallery_2.jpg',
    'src/app/Assets/2023MacBookProM3/MacBook_Pro_M3_Gallery_3.jpg',
    'src/app/Assets/2023MacBookProM3/MacBook_Pro_M3_Gallery_4.jpg',
    'src/app/Assets/2023MacBookProM3/MacBook_Pro_M3_Gallery_5.jpg',
    'src/app/Assets/2023MacBookProM3/MacBook_Pro_M3_Gallery_6.jpg',
    'src/app/Assets/2023MacBookProM3/MacBook_Pro_M3_Gallery_7.jpg',
    'src/app/Assets/2023MacBookProM3/MacBook_Pro_M3_Gallery_8.jpg',
  ];
  return (
    <div>
      <NavBar
        itemInCart={state ? state.ic : []}
        cartNum={state ? state.cn : 0}
      />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img className="w-100" src={product.image}></img>
          </div>
          <div className="col-6 border">
            <div className="container">
              <div className="row">
                <div className="col border d-flex justify-content-center">
                  <h1> Apple 2023 MacBook Pro</h1>
                </div>
              </div>
              <div className="row">
                <div className="col border p-3 d-flex align-items-center justify-content-between">
                  <h3 className="d-inline"> Storage Size:</h3>
                  <div
                    className="btn-group m-3"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio1"
                    />
                    <label class="btn btn-outline-primary" for="btnradio1">
                      256 GB
                    </label>

                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio2"
                    />
                    <label class="btn btn-outline-primary" for="btnradio2">
                      512 GB
                    </label>

                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio3"
                    />
                    <label class="btn btn-outline-primary" for="btnradio3">
                      1 TB
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col border p-3 d-flex align-items-center justify-content-between">
                  <h3 className="d-inline"> Color:</h3>
                  <div
                    className="btn-group m-3"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <input
                      type="radio"
                      class="btn-check"
                      name="btncolor"
                      id="btncolor1"
                    />
                    <label class="btn btn-outline-primary" for="btncolor1">
                      White
                    </label>

                    <input
                      type="radio"
                      class="btn-check"
                      name="btncolor"
                      id="btncolor2"
                    />
                    <label class="btn btn-outline-primary" for="btncolor2">
                      Gray
                    </label>

                    <input
                      type="radio"
                      class="btn-check"
                      name="btncolor"
                      id="btncolor3"
                    />
                    <label class="btn btn-outline-primary" for="btncolor3">
                      Purple
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col border p-3 d-flex align-items-center justify-content-between">
                  <h3 className="d-inline"> Configuration:</h3>
                  <div
                    className="btn-group m-3"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <input
                      type="radio"
                      class="btn-check"
                      name="btnconfig"
                      id="btnconfig1"
                    />
                    <label class="btn btn-outline-primary" for="btnconfig1">
                      M3 Pro Max
                    </label>

                    <input
                      type="radio"
                      class="btn-check"
                      name="btnconfig"
                      id="btnconfig2"
                    />
                    <label class="btn btn-outline-primary" for="btnconfig2">
                      M3 Max
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 border">
                  <h2> ${price}</h2>
                  <h2> {price > 4000 ? 'Free Shipping' : '+15$ Shipping'}</h2>
                </div>
                <div className="row">
                  <div className="col-12">
                    <a className="btn btn-primary m-2 w-100"> Add to Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col p-3 m-3 border">
          <h1> Features: </h1>
          <p className="m-5 border">
            SUPERCHARGED BY M3—With an 8-core CPU and 10-core GPU using
            hardware-accelerated ray tracing, the Apple M3 chip can help you
            blaze through everyday multitasking and take on pro projects like
            editing thousands of photos or 4K video.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {gallery.map((image, i) => (
            <img
              className="w-100 border"
              src={image}
              alt="Broken Image"
              key={i}
            ></img>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default ProductPage;
