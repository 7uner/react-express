function ProductCard({ image, ProductName, ProductDes, ProductPage }) {
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
        <a href={ProductPage} className="btn btn-primary">
          See More
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
