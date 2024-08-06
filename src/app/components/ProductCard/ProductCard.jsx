function ProductCard({
  image,
  ProductName,
  ProductDes,
  ProductPage,
  addToCart,
<<<<<<< Updated upstream
}) {
=======
  itemInCart,
  cartNum,
  ProductPage,
  deleteItem
}) {
  // Hook for displaying if an item was already added to the cart
  const [added, setAdded] = useState(false);
  const navigate = useNavigate();

>>>>>>> Stashed changes
  return (
    <div className="card mb-3">
      <img src={image} className="card-img-top" alt="product" />
      <div className="card-body">
        <h5 className="card-title">{ProductName}</h5>
        <p className="card-text">{ProductDes}</p>
        <div>
<<<<<<< Updated upstream
          <a href={ProductPage} className="btn btn-primary m-2">
            See More
          </a>
          <a onClick={addToCart} className="btn btn-primary m-2">
            Add to Cart
          </a>
=======
          <button
            onClick={() => {
              navigate('/product', {
                state: { itc: itemInCart, cn: cartNum, id: ProductID },
              });
            }}
            className="btn btn-primary m-2"
          >
            See More
          </button>
          {addToCart && (
            <button
              onClick={() => {
                addToCart(ProductName);
                setAdded(true);
              }}
              className="btn btn-primary m-2"
            >
              {added ? 'Added to cart!' : 'Add to Cart'}
            </button>
          )}
          {deleteItem && (
            <button
              onClick={() => deleteItem(ProductName)}
              className="btn btn-danger m-2"
            >
              Remove
            </button>
          )}
>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
