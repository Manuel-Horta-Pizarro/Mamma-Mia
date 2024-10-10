import { useContext } from "react";
import CartContext from "./CartContext.jsx";
import "./Cart.css";

const Cart = () => {
  const { pizzaCart, setPizzaCart } = useContext(CartContext);

  const handleIncrease = (item) => {
    setPizzaCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const handleDecrease = (item) => {
    setPizzaCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  const calculateTotal = () => {
    return pizzaCart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Carrito de compras</h2>
      {pizzaCart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="cart-container"> 
          {pizzaCart.map((item) => (
            <div className="cart-item" key={item.name}> 
              <img src={item.img} alt={item.name} />
              <h2>{item.name}</h2>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <button onClick={() => handleIncrease(item)}>+</button>
              <button onClick={() => handleDecrease(item)}>-</button>
            </div>
          ))}
        </div>
      )}
      <div className="total-container"> 
        <h3>Total: ${calculateTotal()}</h3>
        <button>Pagar</button>
      </div>
    </div>
  );
};

export default Cart;