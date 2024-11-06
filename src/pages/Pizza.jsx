/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Pizza = () => {
  const { id } = useParams(); 
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/pizzas/${id}`);
        setPizza(response.data);
      } catch (error) {
        setError('Error al cargar la pizza');
      }
    };
    fetchPizza();
  }, [id]);

  if (!pizza) return <p>{error || "Cargando pizza..."}</p>;

  return (
    <div>
      <h2>{pizza.nombre}</h2>
      <img src={pizza.img} alt={pizza.nombre} />
      <p>{pizza.descripcion}</p>
      <p>Ingredientes: {pizza.ingredientes.join(', ')}</p>
      <p>Precio: ${pizza.precio}</p>
    </div>
  );
};

export default Pizza;