import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { CartContext } from '../../context/CartContext';
import "./Navbar.css";

const Navbar = () => {
  const { token, logout } = useContext(UserContext);
  const { pizzaCart } = useContext(CartContext);

  const total = pizzaCart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <nav className="navbar">
      <h2 className="titulo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrB9F_Tu3yDTPuh0FVynXpRoFN9TbLpL66dQ&s" alt="Pizza Logo" className="logo" />
        Pizzería Mamma Mía
      </h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        {token ? (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><button onClick={logout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
      <div className="cart-total">
        <Link to="/cart">🛒 Total: ${total}</Link>
      </div>
    </nav>
  );
};

export default Navbar;