import { useContext } from 'react';
import { ShopContext } from "../../context/shop-context";

export const CartItem = (item) => {
  const { id, productName, price, productImage } = item.data;
  const { cartItems, addCart, remove, update } = useContext(ShopContext);

  return (
    <div style={{
      width: "700px",
      height: "250px",
      display: "flex",
      alignItems: "center",
      borderRadius: "25px",
      margin: "30px",
      padding: "20px",
    }}>
      <img src={productImage} alt={productName} style={{ width: "200px"}} />
      <div style={{ marginLeft: "20px" }}>
        <p><b>{productName}</b></p>
        <p>Price: ${price}</p>
        <div>
          <button onClick={() => remove(id)} style={{ marginRight: "10px" }}>-</button>
          <input 
            type="number" 
            value={cartItems[id]} 
            onChange={(e) => update(Number(e.target.value), id)}
            style={{ width: "50px", textAlign: "center" }}
          />
          <button onClick={() => addCart(id)} style={{ marginLeft: "10px" }}>+</button>
        </div>
      </div>
    </div>
  );
};
