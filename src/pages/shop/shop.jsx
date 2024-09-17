import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { Product } from './product';

const Shop = () => {
  const { PRODUCTS } = useContext(ShopContext);

  const styles = {
    container: {
      textAlign: 'center',
      padding: '50px',
    },
    heading: {
      fontSize: '36px',
      marginBottom: '40px',
      fontFamily: 'Arial',
    },
    productContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Daisy's Shop</h1>
      <div style={styles.productContainer}>
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
