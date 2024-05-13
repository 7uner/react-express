import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function TestProductPage() {
  // location for perserving global data
  const { state } = useLocation();
  return (
    <div>
      <NavBar
        itemInCart={state ? state.itc : []}
        cartNum={state ? state.cn : 0}
      />
      <div className="container">
        <div className="row">
          <div className="col-6 border">
            <img
              className="w-100"
              src="https://m.media-amazon.com/images/I/61dnax4xchL._AC_SL1500_.jpg"
            ></img>
          </div>
          <div className="col-6 border">
            <div className="container">
              <div className="row">
                <div className="col border d-flex justify-content-center">
                  <h1>Apple 2023 MacBook Pro</h1>
                </div>
              </div>
              <div className="row">
                <div className="col border p-3 d-flex align-items-center justify-content-between">
                  <h3 className="d-inline m-3">Storage Size:</h3>
                  <div
                    className="btn-group d-inline m-3"
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
                      256 GB
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
                      512 GB
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
                <div className="col border p-3 d-flex align-items-center justify-content-between">
                  <h3 className="d-inline m-3">Colour:</h3>
                  <div
                    className="btn-group d-inline m-3"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <input
                      type="radio"
                      className="btn-check"
                      name="btncolour"
                      id="btncolour1"
                      defaultChecked
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btncolour1"
                    >
                      Silver
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btncolour"
                      id="btncolour2"
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btncolour2"
                    >
                      Space Black
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TestProductPage;
