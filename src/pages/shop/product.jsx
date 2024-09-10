import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id] || 0;

  return (
    <div style={{
      width: "250px",
      margin: "20px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      textAlign: "center",
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
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Add To Cart {cartItemCount > 0 && `(${cartItemCount})`}
      </button>
    </div>
  );
};
