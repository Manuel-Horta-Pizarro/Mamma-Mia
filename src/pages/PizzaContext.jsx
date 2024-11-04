/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/pizzas');
        setPizzas(response.data);
      } catch (error) {
        setError('Error al cargar las pizzas.');
      }
    };
    fetchPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, error }}>
      {children}
    </PizzaContext.Provider>
  );
};