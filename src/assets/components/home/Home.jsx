import Pizzas from './productos/Pizzas/';
import CardPizza from './productos/CardPizza/';

function Home() {
  return (
    <div>
      <div className="card-pizza-container">
        {Pizzas.map((pizza) => (
          <CardPizza key={pizza.id} {...pizza} />
        ))}
      </div>
    </div>
  );
}

export default Home;