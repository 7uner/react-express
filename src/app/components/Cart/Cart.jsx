import ProductCardCart from '../ProductCard/ProductCardCart';

function Cart() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ProductCardCart
            image={'src/app/Assets/MacBookPro.jpg'}
            ProductName={'Mac Book Pro 15th Gen'}
            ProductDes={
              'Apple MacBook Pro is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. It is powered by a Core i5 processor and it comes with 12GB of RAM. The Apple MacBook Pro packs 512GB of SSD storage.'
            }
            ProductPage={'#'}
            addToCart={function addToCart() {
              alert('Removed from Cart!');
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Cart;
