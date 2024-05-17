function ProductCard({
  image,
  ProductName,
  ProductDes,
  ProductPage,
  addToCart,
}) {
  return (
    <div className="card h-100 d-flex flex-direction: column justify-content-between">
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
            <a onClick={addToCart} className="btn btn-primary m-2">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
