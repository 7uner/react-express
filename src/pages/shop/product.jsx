import { useContext } from 'react';
import { ShopContext } from "../../context/shop-context";

export const Product = (item) => {
  const { id, productName, price, productImage } = item.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const count = cartItems[id] ?? 0;

  return (
    <div style={{
      width: "250px",
      margin: "20px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      textAlign: "center",
      fontFamily: "Arial" 
    }}>
      <img src={productImage} alt={productName} style={{ width: "100%", borderRadius: "10px" }} />
      <div>
        <p><b>{productName}</b></p>
        <p>${price}</p>
      </div>
      <button 
        onClick={() => addToCart(id)}
        style={{
          marginTop: "10px",
          padding: "10px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Add To Cart {count > 0 && `(${count})`}
      </button>
    </div>
  );
};
