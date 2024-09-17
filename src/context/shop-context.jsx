import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (items) => {
  const [cartItems, CartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const product = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * product.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    CartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    CartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    CartItems((prev) => ({
      ...prev,
      [itemId]: newAmount,
    }));
  };

  const checkout = () => {
    CartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    PRODUCTS,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {items.children}
    </ShopContext.Provider>
  );
};
