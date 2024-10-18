import { useEffect, useState } from "react";
import axios from "axios";
import CardPizza from './CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const Pizzas = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/pizzas");
        setPizzas(response.data); 
      } catch (error) {
        console.error("Error fetching pizzas:", error);
        setError("Ha ocurrido un error al cargar las pizzas.");
      } finally {
        setIsLoading(false);
      }
    };

    Pizzas();
  }, []);

  return (
    <div className="container-pizza">
      {isLoading ? (
        <p>Cargando pizzas...</p>
      ) : error ? (
        <p>{error}</p>
      ) : pizzas.length === 0 ? (
        <p>No hay pizzas disponibles.</p>
      ) : (
        pizzas.map((pizza) => (
          <CardPizza key={pizza.id} {...pizza} />
        ))
      )}
    </div>
  );
};

export default Home;