import { useContext } from 'react';
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout, PRODUCTS } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "50px", fontFamily: "Arial"  }}>
      <h1>Your Cart Items</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%", alignItems: "center" }}>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null;
        })}
      </div>
      {totalAmount > 0 ? (
        <div style={{ marginTop: "20px" }}>
          <p>Subtotal: ${totalAmount}</p>
          <button 
            onClick={() => navigate("/")}
            style={{
              padding: "10px 20px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "8px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            Continue Shopping
          </button>
          <button 
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
            style={{
              padding: "10px 20px",
              backgroundColor: "rgb(19, 19, 19)",
              color: "white",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1>Empty!</h1>
      )}
    </div>
  );
};
