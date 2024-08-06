function Cart({ image, ProductName, ProductDes, ProductPage }) {
  return (
<<<<<<< Updated upstream
    <div className="card">
      <div>Items in Cart</div>
=======
    <div className="container">
      <h2>Items in Cart</h2>
      {itemInCart.map((product, index) => (
        <div key={index} className="row mb-3">
          <div className="col">
            <ProductCardCart
              image={product.image}
              ProductName={product.name || product.ProductName}
              ProductDes={product.Description || product.ProductDes}
              ProductPage={product.link || product.ProductPage}
              deleteItem={remove}
            />
          </div>
        </div>
      ))}
>>>>>>> Stashed changes
    </div>
  );
}

export default Cart;
