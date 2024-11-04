import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../carrito/CartContext';
import "./Navbar.css";

const Navbar = () => {
  const { calculateTotal } = useContext(CartContext);
  
  return (
    <nav className="navbar">
      <h2 className="titulo">Pizzería Mamma Mía</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
      <div className="cart-total">
        <Link to="/cart">🛒 Total: ${calculateTotal()}</Link>
      </div>
    </nav>
  );
};

export default Navbar;