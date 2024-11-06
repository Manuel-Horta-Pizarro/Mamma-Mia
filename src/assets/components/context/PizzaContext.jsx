/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import pizzas from '../home/productos/Pizzas';  

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzasState, setPizzasState] = useState([]);

  useEffect(() => {
    setPizzasState(pizzas); 
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas: pizzasState }}>
      {children}
    </PizzaContext.Provider>
  );
};