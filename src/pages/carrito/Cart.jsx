import { useContext } from 'react';
import { CartContext } from '../../assets/components/context/CartContext';
import { UserContext } from '../../assets/components/context/UserContext';

const Cart = () => {
  const { pizzaCart, addToCart, removeFromCart, calculateTotal } = useContext(CartContext);
  const { token } = useContext(UserContext);

  if (pizzaCart.length === 0) return <p>Tu carrito está vacío.</p>;

  return (
    <div>
      {pizzaCart.map(item => (
        <div key={item.id}>
          <h2>{item.nombre}</h2>
          <p>Cantidad: {item.count}</p>
          <button onClick={() => addToCart(item)}>+</button>
          <button onClick={() => removeFromCart(item.id)}>-</button>
        </div>
      ))}
      <h3>Total: ${calculateTotal()}</h3>
      <button disabled={!token}>Pagar</button>
    </div>
  );
};

export default Cart;