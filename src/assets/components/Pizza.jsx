import { useState, useEffect } from "react";
import axios from 'axios';

const Pizza = () => {
  const [pizzas, setPizzas] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    const Pizzas = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/api/pizzas/P001');
        setPizzas(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    Pizzas();
  }, []);

  return (
    <div>
      {error ? (
        <p>Error al cargar pizzas: {error.message}</p>
      ) : isLoading ? (
        <p>Cargando pizzas...</p>
      ) : pizzas ? (
        pizzas.map((pizza) => (
          <div key={pizza.id}> 
            <h2>{pizza.nombre}</h2>
            <img src={pizza.img} alt={pizza.nombre} />
            <p>Precio: ${pizza.precio}</p>
            <p>Ingredientes: {pizza.ingredientes.join(", ")}</p>
          </div>
        ))
      ) : (
        <p>No hay pizzas disponibles.</p>
      )}
    </div>
  );
};

export default Pizza;