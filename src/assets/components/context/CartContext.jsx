/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [pizzaCart, setPizzaCart] = useState([]);

  const addToCart = (pizza) => {
    setPizzaCart((prevCart) => {
      const existingPizza = prevCart.find((item) => item.nombre === pizza.nombre);
      if (existingPizza) {
        return prevCart.map((item) =>
          item.nombre === pizza.nombre
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...pizza, cantidad: 1 }];
      }
    });
  };

  const removeFromCart = (nombre) => {
    setPizzaCart((prevCart) => prevCart.filter((pizza) => pizza.nombre !== nombre));
  };

  const calculateTotal = () =>
    pizzaCart.reduce((total, item) => total + item.precio * item.cantidad, 0);

  return (
    <CartContext.Provider value={{ pizzaCart, addToCart, removeFromCart, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;