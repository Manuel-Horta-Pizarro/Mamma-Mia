import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

const Home = () => {
  const { pizzas } = useContext(PizzaContext);

  if (!Array.isArray(pizzas) || pizzas.length === 0) {
    return <p>Cargando pizzas...</p>; 
  }

  return (
    <div>
      {pizzas.map((pizza) => (
        <div key={pizza.id}>
          <h2>{pizza.nombre}</h2>
          <p>{pizza.descripcion}</p>
          <img src={pizza.img} alt={pizza.nombre} />
          <p>Precio: ${pizza.precio}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;