/* eslint-disable react/prop-types */
import "./CardPizza.css";
import { useContext } from 'react';
import CartContext from '../carrito/CartContext.jsx';

function CardPizza({ name, price, ingredients, img }) {
  const { addToCart } = useContext(CartContext);

  const handleClick = () => {
    addToCart({ name, price, ingredients, img, quantity: 1 });
  };

  return (
    <div className="card-pizza">
      <img src={img} alt={name} />
      <h2>{name}</h2>

      <h3>Ingredientes</h3>
      <ul className="ingredientes">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h5>Precio: ${price}</h5>

      <div className="boton">
        <button className="btn1">Ver Más</button>
        <button className="btn2" onClick={handleClick}>Añadir al carrito</button>
      </div>
    </div>
  );
}

export default CardPizza;