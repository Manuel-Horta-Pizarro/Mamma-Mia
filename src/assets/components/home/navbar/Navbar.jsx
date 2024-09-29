import { useState } from 'react';

import "./Navbar.css";
import Register from '../registro/Register';
import Login from '../login/Login';



const Navbar = () => {
  const total = 25000;
  const token = false;
  const [showRegister, setShowRegister] = useState(false); 
  const [showLogin, setShowLogin] = useState(false); 

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  const handleCloseRegister
 = () => {
    setShowRegister(false);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <nav className="navbar">
      <h2 className="titulo">Pizzeria Mamma Mia!</h2>
      <div className="cerca">
        <ul className="nav-links">
          <li><button><a href="#">Home</a></button></li>
          {token ? (
            <>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Logout</a></li>
            </>
          ) : (
            <>
              <li><button onClick={handleLoginClick}>Login</button></li>
              <li><button onClick={handleRegisterClick}>Register</button></li>
            </>
          )}
        </ul>
      </div>
      <div className="total">Total: ${total}</div>
      {showRegister && <Register onClose={handleCloseRegister} />} 
      {showLogin && <Login onClose={handleCloseLogin} />}
    </nav>
  );
};

export default Navbar;