function ProductCardCart({
  image,
  ProductName,
  ProductDes,
  ProductPage,
  deleteItem,
}) {
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
                defaultValue={1}
              >
                <option value="1">Qty: 1</option>
                <option value="2">Qty: 2</option>
                <option value="3">Qty: 3</option>
                <option value="4">Qty: 4</option>
              </select>
              <a
                className="btn btn-primary m-2"
                onClick={() => deleteItem(ProductName)}
              >
                Remove from Cart
              </a>
              <a className="btn btn-primary m-2">Save for Later</a>
              <a className="btn btn-primary m-2">Share</a>
            </div>
          </div>
          <div className="col-2 d-flex flex-column justify-content-center">
            <h1 className="card-title fw-bold">$1399.99</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardCart;
