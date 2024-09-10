
import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Product } from "./product";

const Shop = () => {
  const { PRODUCTS } = useContext(ShopContext);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ fontSize: "36px", marginBottom: "40px" }}>Daisy's Shop</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
