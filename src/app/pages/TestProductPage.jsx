import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import productList from '../data/productData';

function TestProductPage() {
  // location for perserving global data
  const { state } = useLocation();
  // filter for the specific product from product List
  // TODO: remember to check for null state later
  const product = productList.filter((obj) => {
    return obj.id === state.id;
  })[0];
  //hook for disply of no. of items in cart
  const [NumCartItems, setNumCartItems] = useState(state ? state.cn : 0);
  //hook for adding product to cart list
  const [cart, setCart] = useState(state ? state.itc : []);
  // fetch an array of options, for mapping use
  const keyArray = Object.keys(product.options);

  // function handler to add product to cart
  function handleAddToCart() {
    setCart([...cart, product]);
    //call the usestate function here
    setNumCartItems(NumCartItems + 1);
  }

  return (
    <div>
      <NavBar itemInCart={cart} cartNum={NumCartItems} />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img className="w-100" src={product.image}></img>
          </div>
          <div className="col-6">
            <div className="container">
              <div className="row">
                <div className="col d-flex justify-content-center">
                  <h1>{product.name}</h1>
                </div>
              </div>
              <div>
                {keyArray.map((option, i) => (
                  <div key={i} className="row">
                    <div className="col d-flex align-items-center justify-content-between">
                      <h3 className="d-inline m-3">{option}:</h3>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic radio toggle button group"
                      >
                        {product.options[option].map((choice, j) => (
                          <div key={j} className="d-inline">
                            <input
                              type="radio"
                              className="btn-check"
                              name={option}
                              id={choice[0]}
                            />
                            <label
                              className="btn btn-outline-primary"
                              htmlFor={choice[0]}
                            >
                              {choice[0]}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col-6">
                  <h2>${product.price}</h2>
                  <h2>
                    {product.price > 4000
                      ? 'Free Shipping!'
                      : '+ $9.99 Shipping'}
                  </h2>
                </div>
                <div className="col-6 d-flex justify-content-end align-items-center">
                  <a className="btn btn-primary m-2" onClick={handleAddToCart}>
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col p-3">
            {product.features.map((feature, i) => (
              <p key={i} className="m-3">
                {feature}
              </p>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {product.gallery.map((image, i) => (
              <img
                key={i}
                src={image}
                alt="Product Gallery Broken Image"
                className="w-100"
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TestProductPage;
