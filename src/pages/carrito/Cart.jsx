import { useContext } from 'react';
import { CartContext } from '../../assets/components/home/CartContext';

const Cart = () => {
  const { pizzaCart, addToCart, removeFromCart, calculateTotal } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {pizzaCart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        pizzaCart.map((item) => (
          <div key={item.nombre}>
            <h3>{item.nombre}</h3>
            <p>Precio: ${item.precio}</p>
            <p>Cantidad: {item.cantidad}</p>
            <button onClick={() => addToCart(item)}>+</button>
            <button onClick={() => removeFromCart(item.nombre)}>-</button>
          </div>
        ))
      )}
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default Cart;