import ProductCardCart from '../ProductCard/ProductCardCart';

function Cart({ itemInCart, remove }) {
  return (
    <div className="container">
      {itemInCart.map((product, i) => (
        <div key={i} className="row">
          <div key={i} className="col">
            <ProductCardCart
              image={product.image}
              ProductName={product.name}
              ProductDes={product.Description}
              ProductPage={product.link}
              deleteItem={remove}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
