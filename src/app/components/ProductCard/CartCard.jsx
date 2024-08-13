import { useState } from 'react';

function CartCard({ img, name, des, price, shipping, quantity, handleDelete }) {
  const [qty, setQty] = useState(quantity ? quantity : 1);
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <div className="card">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img
                src={img}
                alt="cart card image broken"
                className="card-img-top"
              ></img>
            </div>
            <div className="col-6 d-flex flex-column justify-content-center">
              <h1 className="mx-auto">{name}</h1>
              <h3 className="mx-auto">{des}</h3>
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
                  className="btn btn-primary m-1"
                  onClick={() => {
                    setDisplay(!display);
                  }}
                >
                  +
                </a>
                <a
                  className="btn btn-primary m-1"
                  onClick={() => {
                    handleDelete(name);
                  }}
                >
                  Delete
                </a>
                <a className="btn btn-primary m-1">Save for Later</a>
                <a className="btn btn-primary m-1">Details</a>
              </div>
            </div>
            <div className="col-2 d-flex flex-column justify-content-center">
              <h1 className="">${price}</h1>
              <h3 className="">
                {shipping == 0 ? 'Free Shipping' : '$' + shipping + ' Shipping'}
              </h3>
              <h3>Total: {(qty * price).toFixed(2)}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
