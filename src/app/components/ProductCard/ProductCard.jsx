import { useState } from 'react';

function ProductCard({
  image,
  ProductName,
  ProductDes,
  ProductPage,
  addToCart,
}) {
  const [cartDisplay, setCartDisplay] = useState(false);

  return (
    <div className="card h-100 d-flex flex-column justify-content-between">
      <img
        src={image}
        className="card-img-top"
        alt="product image not available"
      />
      <div className="container">
        <div className="row d-flex">
          <div className="col">
            <h5 className="card-title">{ProductName}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="card-text">{ProductDes}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <a href={ProductPage} className="btn btn-primary m-2">
              See More
            </a>
            <a
              onClick={() => {
                addToCart();
                setCartDisplay(true);
              }}
              className="btn btn-primary m-2"
            >
              {cartDisplay ? 'Added to Cart!' : 'Add to Cart'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
