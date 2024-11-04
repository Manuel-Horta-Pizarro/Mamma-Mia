/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [pizzaCart, setPizzaCart] = useState([]);

  const addToCart = (pizza) => {
    setPizzaCart((prevCart) => {
      const existingPizza = prevCart.find((item) => item.name === pizza.name);
      if (existingPizza) {
        return prevCart.map((item) =>
          item.name === pizza.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (name) => {
    setPizzaCart((prevCart) =>
      prevCart.filter((pizza) => pizza.name !== name)
    );
  };

  return (
    <CartContext.Provider value={{ pizzaCart, setPizzaCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;