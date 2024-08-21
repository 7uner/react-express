function SeeMore({ image, ProductName, ProductDes, ProductPage }) {
  return (
    <div className="card h-100 d-flex flex-column">
      <img
        src={image}
        className="card-img-top"
        alt="product image not available"
      />
      <div className="card-body">
        <h5 className="card-title">{ProductName}</h5>
        <p className="card-text">{ProductDes}</p>
      </div>
    </div>
  );
}

export default SeeMore;
