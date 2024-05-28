import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import ProductCard from '../components/ProductCard/ProductCard';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function TestProductPage() {
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

  // location for perserving global data
  const { state } = useLocation();
  //hook for disply of no. of items in cart
  const [NumCartItems, setNumCartItems] = useState(state ? state.cn : 0);
  //hook for adding product to cart list
  const [cart, setCart] = useState(state ? state.itc : []);

  return (
    <div>
      <NavBar cartNum={NumCartItems} itemInCart={cart} />
      <div className="container">
        <div className="row">
          <div className="col-6 border">
            <img
              className="w-100"
              src="https://m.media-amazon.com/images/I/61dnax4xchL._AC_SL1500_.jpg"
              alt=""
            />
          </div>
          <div className="col-6 border">
            <div className="container">
              <div className="row">
                <div className="col d-flex justify-content-center">
                  <h2 className="">Apple 2023 MacBook Pro Laptop</h2>
                </div>
              </div>
              <div className="row border">
                <div className="col d-flex justify-content-between border">
                  <h5 className="m-3">Storage Size:</h5>
                  <div
                    className="btn-group h-75 my-auto"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio1"
                      defaultChecked
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btnradio1"
                    >
                      128 GB
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio2"
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btnradio2"
                    >
                      256 GB
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio3"
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btnradio3"
                    >
                      1 TB
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-between border">
                  <h5 className="m-3">Colour:</h5>
                  <div
                    className="btn-group h-75 my-auto"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnColour"
                      id="btnColour1"
                      defaultChecked
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btnColour1"
                    >
                      Space Black
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnColour"
                      id="btnColour2"
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btnColour2"
                    >
                      Silver
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-between border">
                  <h5 className="m-3">Chip Type:</h5>
                  <div
                    className="btn-group h-75 my-auto"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnChip"
                      id="btnChip1"
                      defaultChecked
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btnChip1"
                    >
                      M3 Pro Chip
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnColour"
                      id="btnChip2"
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btnChip2"
                    >
                      M3 Max Chip
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-between">
                  <h3 className="d-inline m-3">$3,299.99</h3>
                  <h3 className="d-inline m-3">Free Shipping</h3>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-end">
                  <a role="button" className="btn btn-primary">
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Features</h3>
            <p>
              SUPERCHARGED BY M3 PRO OR M3 MAX—The Apple M3 Pro chip, with a
              12-core CPU and 18-core GPU using hardware-accelerated ray
              tracing, delivers amazing performance for demanding workflows like
              manipulating gigapixel panoramas or compiling millions of lines of
              code. M3 Max, with an up to 16-core CPU and up to 40-core GPU,
              drives extreme performance for the most advanced workflows like
              rendering intricate 3D content or developing transformer models
              with billions of parameters.
            </p>
            <p>
              UP TO 22 HOURS OF BATTERY LIFE—Go all day thanks to the
              power-efficient design of Apple silicon. MacBook Pro delivers the
              same exceptional performance whether it’s running on battery or
              plugged in.
            </p>
            <p>
              RESPONSIVE UNIFIED MEMORY AND STORAGE—Up to 36GB (M3 Pro) or up to
              128GB (M3 Max) of unified memory makes everything you do fast and
              fluid. Up to 4TB (M3 Pro) or up to 8TB (M3 Max) of superfast SSD
              storage launches apps and opens files in an instant
            </p>
            <p>
              BRILLIANT PRO DISPLAY—The 16.2-inch Liquid Retina XDR display
              features Extreme Dynamic Range, 1000 nits of sustained brightness
              for stunning HDR content, up to 600 nits of brightness for SDR
              content, and pro reference modes for doing your best work on the
              go.{' '}
            </p>
            <p>
              FULLY COMPATIBLE—All your pro apps run lightning fast—including
              Adobe Creative Cloud, Apple Xcode, Microsoft 365, SideFX Houdini,
              MathWorks MATLAB, Medivis SurgicalAR, and many of your favorite
              iPhone and iPad apps. And with macOS, work and play on your Mac
              are even more powerful. Elevate your presence on video calls.
              Access information in all-new ways. And discover even more ways to
              personalize your Mac.{' '}
            </p>
            <p>
              ADVANCED CAMERA AND AUDIO—Look sharp and sound great with a 1080p
              FaceTime HD camera, a studio-quality three-mic array and a
              six-speaker sound system with Spatial Audio.{' '}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {gallery.map((image, i) => (
              <img className="w-100" key={i} src={image}></img>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TestProductPage;
