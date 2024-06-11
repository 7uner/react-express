import React from 'react';
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <img
              className="w-100 p-3 border"
              src="https://images.unsplash.com/photo-1621768216002-5ac171876625?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us"
              style={{ marginLeft: '20px' }}
            />
          </div>
          <div className="col-8">
            <div className="d-flex justify-content-center">
              <h1>About Us</h1>
            </div>
            <div className="d-flex justify-content-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                scelerisque aliquam odio et faucibus. Donec venenatis, turpis
                vel hendrerit interdum, dui ligula ultricies purus, sed posuere
                libero dui id orci. Nam congue magna at erat facilisis, nec
                bibendum odio eleifend. Phasellus volutpat enim quis nunc
                cursus, a molestie nisi pellentesque.
              </p>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-12">
            <h2 className="text-center">Our Team</h2>
          </div>
          <div className="col-3 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
              className="rounded-circle mb-2"
            />
            <h5>John Doe</h5>
            <p>CEO</p>
          </div>
          <div className="col-3 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 2"
              className="rounded-circle mb-2"
            />
            <h5>Jane Smith</h5>
            <p>CTO</p>
          </div>
          <div className="col-3 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 3"
              className="rounded-circle mb-2"
            />
            <h5>Emily Johnson</h5>
            <p>COO</p>
          </div>
          <div className="col-3 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 4"
              className="rounded-circle mb-2"
            />
            <h5>Michael Brown</h5>
            <p>CFO</p>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-12">
            <h2 className="text-center">Gallery</h2>
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="src/app/Assets/2023MacBookProM3/picture.jpg"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="src/app/Assets/2023MacBookProM3/image.png"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="src/app/Assets/2023MacBookProM3/picture.jpg"
                    alt="Third slide"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-12">
            <h2 className="text-center">Contact Us</h2>
            <form className="p-4">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
