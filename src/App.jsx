import { useState } from "react";
import Footer from "./assets/components/home/footer/Footer";
import Navbar from "./assets/components/home/navbar/Navbar";
import Cart from "./assets/components/home/carrito/Cart";
//import Login from "./assets/components/home/login/Login";
//import Register from "./assets/components/home/registro/Register";
import Home from "./assets/components/home/Home";
import { CartProvider } from "./assets/components/home/carrito/CartContext.jsx";

const App = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <CartProvider>
      <Navbar
        showRegister={showRegister}
        setShowRegister={setShowRegister}
        showLogin={showLogin}
        setShowLogin={setShowLogin}
      />
      <Cart/>
      {/*showRegister && <Register />*/}
      {/*showLogin && <Login />*/}
      <Home/>
      <Footer />
    </CartProvider>
  );
};

export default App;
