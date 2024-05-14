import Footer from '../components/NavBar/Footer';
import NavBar from '../components/NavBar/NavBar';
import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import productList from '../Data/ProductData';

function ProductPage() {
  // location for perserving global data
  const { state } = useLocation();
  //useMemo is a block that runs before rendering
  //filter the product list for the product to display
  const product = useMemo(
    () =>
      productList.filter((obj) => {
        return obj.id === state.id;
      })[0]
  );
  //fetch the list of keys for options for mapping later
  const keyArray = Object.keys(product.options);
  //options obj
  var priceOptions = {};
  //load an object with it, to use for the option hook
  keyArray.forEach((key) => (priceOptions[key] = 0));
  // hooks for product options
  const [size, setSize] = useState(256);
  const [colour, setColour] = useState('Silver');
  const [config, setConfig] = useState('Pro');
  // hook for price updates
  const [price, setPrice] = useState(product.price);
  //hook for keeping track of which options are chosen
  const [prices, setPrices] = useState(priceOptions);
  //hook for disply of no. of items in cart
  const [NumCartItems, setNumCartItems] = useState(state ? state.cn : 0);
  //hook for adding product to cart list
  const [cart, setCart] = useState(state ? state.itc : []);

  // function handler to add product to cart
  function handleAddToCart(ProductName) {
    //add our item to the cart list, update state
    setCart([
      ...cart,
      productList.filter((obj) => {
        return obj.name === ProductName;
      })[0],
    ]);
    console.log(cart);
    //call the usestate function here

    setNumCartItems(NumCartItems + 1);
    console.log(NumCartItems);
  }

  //function to handle price change on option select
  function handleOption() {
    var total = product.price;
    for (const option in priceOptions) {
      total += prices[option];
    }
    setPrice(total);
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
              {keyArray.map((key, i) => (
                <div key={i} className="row">
                  <div className="col p-3 d-flex align-items-center justify-content-between">
                    <h3 className="d-inline">{key}:</h3>
                    <div
                      className="btn-group d-inline"
                      role="group"
                      aria-label="Basic radio toggle button group"
                    >
                      {product.options[key].map((option, j) => (
                        <div key={j} className="d-inline">
                          <input
                            type="radio"
                            className="btn-check"
                            name={'btn' + i}
                            id={'btnOption' + i + j}
                            value={option[1]}
                            onClick={() => {
                              prices[key] = option[1];
                              console.log(prices);
                              handleOption();
                            }}
                          />
                          <label
                            className="btn btn-outline-primary"
                            htmlFor={'btnOption' + i + j}
                          >
                            {option[0]}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <div className="row">
                <div className="col-6">
                  <h2>${price}</h2>
                  <h2>{price > 4000 ? 'Free Shipping' : '+ $9.99 Shipping'}</h2>
                </div>
                <div className="col-6 d-flex justify-content-end align-items-center">
                  <a
                    className="btn btn-primary w-100"
                    onClick={() => {
                      handleAddToCart(product.name);
                    }}
                  >
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col m-3">
            <h1>Features:</h1>
            {product.features.map((txt, i) => (
              <p key={i}>{txt}</p>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {product.gallery.map((image, i) => (
              <img
                className="w-100"
                src={image}
                alt="Mac Book Product Broken Image"
                key={i}
              ></img>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;
