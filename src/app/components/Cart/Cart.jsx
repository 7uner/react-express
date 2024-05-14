import ProductCardCart from '../ProductCard/ProductCardCart';

function Cart({}) {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <ProductCardCart
            image={'src/app/Assets/MBPro.jpg'}
            ProductName={'MacBook Pro'}
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
