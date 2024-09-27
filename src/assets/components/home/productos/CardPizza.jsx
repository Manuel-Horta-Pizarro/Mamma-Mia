/* eslint-disable react/prop-types */
import "./CardPizza.css";

export default function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className="card-pizza">
      <img src={img} alt={name} />
      <h2>{name}</h2>

      <ul className="ingredientes">
        <p>Ingredientes</p>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h5>Precio: ${price}</h5>

      <div className="boton">
        <button>Ver Más</button>
        <button>Añadir</button>
      </div>
    </div>
  );
}
