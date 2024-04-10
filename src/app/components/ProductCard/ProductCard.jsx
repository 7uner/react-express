function ProductCard({
  image,
  ProductName,
  ProductDes,
  ProductPage,
  addToCart,
}) {
  return (
    <div className="card">
      <img
        src={image}
        className="card-img-top"
        alt="product image not available"
      />
      <div className="card-body">
        <h5 className="card-title">{ProductName}</h5>
        <p className="card-text">{ProductDes}</p>
        <div>
          <a href={ProductPage} className="btn btn-primary m-2">
            See More
          </a>
          <a onClick={addToCart} className="btn btn-primary m-2">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
