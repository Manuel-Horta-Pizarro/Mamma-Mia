import { useContext } from 'react';
import { PizzaContext } from './PizzaContext';
import CardPizza from './carrito/PizzaCart';

const Home = () => {
  const { pizzas, error } = useContext(PizzaContext);

  return (
    <div className="pizza-list">
      {error ? (
        <p>{error}</p>
      ) : (
        pizzas.map((pizza) => <CardPizza key={pizza.id} {...pizza} />)
      )}
    </div>
  );
};

export default Home;