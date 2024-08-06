import { useState } from 'react';

function ProductCardCart({
  image,
  ProductName,
  ProductDes,
  price,
  shipping,
  ProductPage,
  deleteItem,
  quantity,
  productID,
}) {
  // state to keep track off the quantity per item
  const [qty, setQty] = useState(quantity ? quantity : 1);
  // state to determine which qty option to display
  const [display, setDisplay] = useState(qty > 3 ? false : true);

  return (
    <div className="card">
      <div className="container border border-3">
        <div className="row">
          <div className="col-4 p-3">
            <img
              src={image}
              className="card-img-top"
              alt="product image not available"
            />
          </div>
          <div className="col-6 d-flex flex-column justify-content-center p-2">
            <h5 className="card-title">{ProductName}</h5>
            <p className="card-text">{ProductDes}</p>
            <div className="d-flex justify-content-center">
              <select
                className="form-select w-25 h-75 align-self-center m-2"
                aria-label="Default select example"
                defaultValue={qty}
                onChange={(e) => setQty(e.target.value)}
                style={{
                  visibility: display ? 'visible' : 'hidden',
                  display: display ? 'inline' : 'none',
                }}
              >
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <input
                className="form-control w-25 h-75 align-self-center m-2"
                placeholder={qty}
                style={{
                  visibility: display ? 'hidden' : 'visible',
                  display: display ? 'none' : 'inline',
                }}
                onChange={(e) => {
                  e.preventDefault();
                  setQty(e.target.value);
                }}
              ></input>
              <a
                className="btn btn-primary m-2"
                onClick={() => {
                  setDisplay(!display);
                }}
              >
                +
              </a>
              <a
                className="btn btn-primary m-2"
                onClick={() => deleteItem(productID)}
              >
                Remove from Cart
              </a>
              <a className="btn btn-primary m-2">Save for Later</a>
              <a className="btn btn-primary m-2">Share</a>
            </div>
          </div>
          <div className="col-2 d-flex flex-column justify-content-center">
            <h1 className="">${price}</h1>
            <h3>Total: {(qty * price).toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardCart;
