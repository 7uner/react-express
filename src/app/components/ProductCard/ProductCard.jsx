import { useState } from 'react';

function ProductCard({
  image,
  ProductName,
  ProductSub,
  ProductDes,
  ProductPage,
  addToCart,
}) {
  const [added, setAdded] = useState(false);
  console.log(addToCart);

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt="img not avaliable" />
      <div className="card-body">
        <h5 className="card-title">{ProductName}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{ProductSub}</h6>
        <p className="card-text">{ProductDes}</p>
        <a href={ProductPage} className="btn btn-primary m-2">
          See More
        </a>
        <a
          onClick={() => {
            addToCart(ProductName);
            setAdded(true);
          }}
          className="btn btn-primary m-2"
        >
          {added ? 'Added to cart!' : 'Add to Cart'}
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
