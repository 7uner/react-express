import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function About() {
  const { state } = useLocation();
  return (
    <div>
      <NavBar
        itemInCart={state ? state.itc : []}
        cartNum={state ? state.cn : 0}
      />
      <div class="container-fluid">
        <div class="row">
          <div class="col-4">
            <img
              className="w-100 p-3 border"
              src="https://images.unsplash.com/photo-1621768216002-5ac171876625?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ marginLeft: '20px' }}
            />
          </div>
          <div className="col-8 ">
            <div class="d-flex justify-content-center">
              <h1>About Us</h1>
            </div>
            <div class="d-flex justify-content-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                scelerisque aliquam odio et faucibus.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="d-flex justify-content-center">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      src="src\app\Assets\apple_banner_1.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="src\app\Assets\apple_banner_2.jpg"
                      alt="Second slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="src\app\Assets\apple_banner_3.jpg"
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
