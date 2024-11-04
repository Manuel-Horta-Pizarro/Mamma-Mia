/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Pizza = () => {
  const { id } = useParams(); 
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/pizzas/${id}`);
        setPizza(response.data);
      } catch (error) {
        setError('Error al cargar la pizza');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPizza();
  }, [id]); 

  if (isLoading) {
    return <p>Cargando pizza...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {pizza ? (
        <div>
          <h2>{pizza.name}</h2>
          <img src={pizza.img} alt={pizza.name} />
          <p>Descripción: {pizza.descripcion}</p>
          <p>Ingredientes: {pizza.ingredients.join(', ')}</p>
          <p>Precio: ${pizza.price}</p>
        </div>
      ) : (
        <p>No se encontró la pizza.</p>
      )}
    </div>
  );
};

export default Pizza;