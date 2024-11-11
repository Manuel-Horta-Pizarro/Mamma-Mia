import { useContext, useState } from 'react';
import { CartContext } from '../../assets/components/context/CartContext';
import { UserContext } from '../../assets/components/context/UserContext';
import './Cart.css';

const Cart = () => {
  const { pizzaCart, calculateTotal, updateCartItemQuantity, removeItemFromCart } = useContext(CartContext);
  const { checkout, token } = useContext(UserContext);

  const handleCheckout = async () => {
    const response = await checkout(pizzaCart);
    if (response) {
      alert(response.message);
    }
  };

  
  const [quantities, setQuantities] = useState(
    pizzaCart.reduce((acc, item) => ({ ...acc, [item.id]: item.cantidad || 1 }), {}) 
  );

  const handleQuantityChange = (itemId, newQuantity) => {
    setQuantities((prevQuantities) => ({ ...prevQuantities, [itemId]: newQuantity }));
    updateCartItemQuantity(itemId, newQuantity); 
  };

  const handleRemoveItem = (itemId) => {
    removeItemFromCart(itemId);
    setQuantities((prevQuantities) => ({ ...prevQuantities, [itemId]: undefined })); 
  };

  if (pizzaCart.length === 0) return <h2>Tu carrito está vacío.</h2>;

  return (
    <div className="cart-wrapper">
      <h2>Carrito de Compras</h2>
      <div className="cart-container">
        {pizzaCart.map((item, index) => (
          <div key={index} className="cart-item">
            <img className="cart-image" src={item.img} alt={item.name} />
            <h3 className="cart-item-title">{item.name}</h3>
            <p className="cart-item-price">Precio: ${item.price}</p>
            <div className="quantity-container">
              <button onClick={() => handleQuantityChange(item.id, quantities[item.id] - 1)}>-</button>
              <input type="number" min={1} value={quantities[item.id] || 1} onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))} />
              <button onClick={() => handleQuantityChange(item.id, quantities[item.id] + 1)}>+</button>
            </div>
            <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
          </div>
        ))}
      </div>
      <div className="total-container">
        <h3>Total: ${calculateTotal(quantities)} (Actualizado)</h3> 
        <button onClick={handleCheckout} disabled={!token}>
          Realizar Compra
        </button>
      </div>
    </div>
  );
};

export default Cart;