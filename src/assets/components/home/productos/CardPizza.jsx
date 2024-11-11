/* eslint-disable react/prop-types */
import { useContext } from 'react';
import CartContext from '../../context/CartContext';


function CardPizza({ nombre, precio, ingredientes, img }) {
  const { addToCart } = useContext(CartContext);

  const handleClick = () => {
    addToCart({ nombre, precio, ingredientes, img, cantidad: 1 });
  };

  return (
    <div className="card-pizza">
      <img src={img} alt={nombre} />
      <h2>{nombre}</h2>

      <h3>Ingredientes</h3>
      <ul className="ingredients-list">
        {ingredientes.map((ingredientes, index) => (
          <li key={index}>{ingredientes}</li>
        ))}
      </ul>

      <h5>Precio: ${precio}</h5>

      <div className="buttons">
        <button className="btn1">Ver Más</button>
        <button className="btn2" onClick={handleClick}>Añadir al carrito</button>
      </div>
    </div>
  );
}

export default CardPizza;