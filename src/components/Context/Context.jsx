/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from "react";
import { popular } from "../../data";

export const AppContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < popular.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(popular);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] + 1 };
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };

  const updateCartAmount = (newAmount, itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: newAmount };
    });
  };

  const cartSubtotal = () => {
    let subTotal = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemPrice = products.find((Product) => Product.id === Number(item));
        subTotal += cartItems[item] * itemPrice.price;
      }
    }
    return subTotal;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    products,
    setProducts,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    updateCartAmount,
    cartSubtotal,
    getTotalCartItems,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
