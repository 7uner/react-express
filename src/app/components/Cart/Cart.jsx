import ProductCardCart from '../components/ProductCard/ProductCardCart';

function Cart({ itemInCart, remove }) {
  return (
    <div className="container">
      <h2>Items in Cart</h2>
      {itemInCart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        itemInCart.map((product, index) => (
          <div key={index} className="row mb-3">
            <div className="col">
              <ProductCardCart
                image={product.image}
                ProductName={product.name || product.ProductName}
                ProductDes={product.Description || product.ProductDes}
                ProductPage={product.link || product.ProductPage}
                deleteItem={() => remove(product.name)}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
