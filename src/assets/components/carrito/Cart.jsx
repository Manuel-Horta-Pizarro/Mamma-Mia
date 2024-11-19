/* eslint-disable react/prop-types */
import { useContext } from 'react';
import CartContext  from '../context/CartContext';
import { UserContext } from '../context/UserContext';
import './Cart.css';


const Cart = ({ onClose }) => {
  const { pizzaCart, calculateTotal, removeItemFromCart } = useContext(CartContext);
  const { checkout, token } = useContext(UserContext);

  const handleCheckout = async () => {
    const response = await checkout(pizzaCart);
    if (response) {
      alert(response.message);
    }
  };

  if (pizzaCart.length === 0) {
    return (
      <div className="cart-float">
        <button className="close-button" onClick={onClose}>✖</button> 
        <div className="cart-content">
          <h2>Tu carrito está vacío.</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-float">
      <button className="close-button" onClick={onClose}>✖</button>
      <div className="cart-content">
        <h2>Carrito de Compras</h2>
        {pizzaCart.map((item) => (
          <div key={item.id} className="cart-item">
            <img className="cart-image" src={item.img} alt={item.name} />
            <h3 className="cart-item-title">{item.name}</h3>
            <p className="cart-item-price">Precio: ${item.price}</p>
            <button className="remove-button" onClick={() => removeItemFromCart(item.id)}>Eliminar</button>
          </div>
        ))}
        <div className="total-container">
          <h3>Total: ${calculateTotal()}</h3>
          <button onClick={handleCheckout} disabled={!token}>
            Realizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

