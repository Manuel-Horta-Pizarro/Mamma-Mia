
import "./Navbar.css"

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar">
    <h2 className="titulo">Pizzeria Mamma Mia!</h2>
    <div className="cerca"> <ul className="nav-links">
        <li><button><a href="#">Home</a></button></li>
        {token ? (
          <>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Logout</a></li>
          </>
        ) : (
          <>
            <li><button><a href="#">Login</a></button></li>
            <li><button><a href="#">Register</a></button></li>
          </>
        )}
      </ul></div>
     
      <div className="total">Total: ${total}</div>
    </nav>
  );
};


export default Navbar;