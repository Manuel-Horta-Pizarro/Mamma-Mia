import { useContext } from 'react';
import { CartContext } from '../../assets/components/home/CartContext';

const Cart = () => {
  const { pizzaCart, addToCart, removeFromCart } = useContext(CartContext);

  const handleIncrease = (item) => addToCart(item);  
  const handleDecrease = (item) => removeFromCart(item.name);  
  return (
    <div>
      {pizzaCart.map(item => (
        <div key={item.nombre}>
          <h2>{item.nombre}</h2>
          <p>Cantidad: {item.quantity}</p>
          <button onClick={() => handleIncrease(item)}>+</button>
          <button onClick={() => handleDecrease(item)}>-</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
