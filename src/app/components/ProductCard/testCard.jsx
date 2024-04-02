function TestCardCart({
  image,
  ProductName,
  ProductDes,
  ProductPage,
  addToCart,
}) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col-4 border border-3">
              <img
                src={image}
                className="card-img-top"
                alt="product image not available"
              />
            </div>
            <div className="col-6 p-2 border border-3">
              <h5 className="card-title border border-3">{ProductName}</h5>
              <p className="card-text border border-3">{ProductDes}</p>
              <div className="d-flex justify-content-center border border-3">
                <select
                  className="form-select h-25 w-25 align-self-center m-2"
                  aria-label="Default select example"
                >
                  <option selected value="1">
                    Qty: 1
                  </option>
                  <option value="2">Qty: 2</option>
                  <option value="3">Qty: 3</option>
                  <option value="4">Qty: 4</option>
                </select>
                <a className="btn btn-primary m-2">Save for Later</a>
                <a onClick={addToCart} className="btn btn-primary m-2">
                  Remove From Cart
                </a>
                <a className="btn btn-primary m-2">Share</a>
              </div>
            </div>
            <div className="col-2 d-flex flex-column justify-content-center">
              <h1 className="card-title fw-bold border border-3">$1399.99</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestCardCart;
