import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({
  image,
  ProductName,
  ProductDes,
  ProductID,
  addToCart,
  itemInCart,
  cartNum,
}) {
  const [added, setAdded] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt="img not avaliable" />
      <div className="card-body">
        <h5 className="card-title">{ProductName}</h5>
        <p className="card-text">{ProductDes}</p>
        <div>
          <a
            onClick={() => {
              navigate('/product', {
                state: { itc: itemInCart, cn: cartNum, id: ProductID },
              });
            }}
            className="btn btn-primary m-2"
          >
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
    </div>
  );
}

export default ProductCard;
