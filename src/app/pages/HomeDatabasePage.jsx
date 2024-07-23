import NavBar from '../components/NavBar/NavBar';
import ProductCard from '../components/ProductCard/ProductCard';
import { useState, useEffect } from 'react';

function HomeDatabasePage() {
  //hook for disply of no. of items in cart
  const [NumCartItems, setNumCartItems] = useState(0);
  //hook for cart item title display
  const [show, setShow] = useState(true);
  //hook for adding product to cart list
  const [cart, setCart] = useState([]);
  //hook for fetching the entire producct list
  const [productList, setProductList] = useState([]);

  function handleLoad() {}

  //fetch product data
  useEffect(() => {
    fetch('http://localhost:3001/findAllProduct')
      .then((response) => response.json())
      .then((json) => setProductList(json))
      .then(() => console.log(productList))
      .catch((error) => console.error(error));
  }, [productList]);

  return (
    <div>
      <NavBar />
      <div className="row">
        {productList.map((product, i) => (
          <div key={i} className="col-4">
            <ProductCard
              image={product.image}
              ProductName={product.name}
              ProductDes={product.Description}
              ProductID={product.id}
              itemInCart={[]}
              cartNum={0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeDatabasePage;
