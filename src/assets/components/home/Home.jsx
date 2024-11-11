import { useState } from 'react';
import PizzaDetailsModal from './productos/PizzaDetailsModal';
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { CartContext } from '../context/CartContext'; 
import './home.css'; 

const Home = () => {
  const { pizzas } = useContext(PizzaContext);
  const { addToCart } = useContext(CartContext);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  const handleClick = (pizza) => { 
    addToCart({ ...pizza, cantidad: 1 }); 
  };

  const handleOpenDetails = (pizza) => {
    setSelectedPizza(pizza);
    setIsDetailsModalOpen(true);
  };

  const handleCloseDetails = () => {
    setSelectedPizza(null);
    setIsDetailsModalOpen(false);
  };

  if (!Array.isArray(pizzas) || pizzas.length === 0) {
    return <p>Cargando pizzas...</p>;
  }

  return (
    <div className="pizza-container">
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="pizza-card">
          <h2>{pizza.nombre}</h2>
          
          <img src={pizza.img} alt={pizza.nombre} />
          <p>Precio: ${pizza.precio}</p>
          <button onClick={() => handleClick(pizza)}>Añadir al carrito</button>
          <button onClick={() => handleOpenDetails(pizza)}>Ver Detalles</button>
        </div>
      ))}
      {isDetailsModalOpen && <PizzaDetailsModal pizza={selectedPizza} isOpen={isDetailsModalOpen} onClose={handleCloseDetails} />}
    </div>
  );
};

export default Home;