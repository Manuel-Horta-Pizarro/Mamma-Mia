import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./assets/components/home/footer/Footer";
import Navbar from "./assets/components/home/navbar/Navbar";
import Cart from "./pages/carrito/Cart.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/registro/Register.jsx";
import Home from "./pages/Home.jsx"; 
import { CartProvider } from "./assets/components/home/CartContext.jsx";
import Pizza from "./pages/Pizza.jsx"; 
import NotFound from "./pages/NotFound.jsx"; 
import Profile from "./pages/profile.jsx";
import { PizzaProvider } from "./pages/PizzaContext.jsx";

const App = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <PizzaProvider>
    <CartProvider>
      <Navbar
        showRegister={showRegister}
        setShowRegister={setShowRegister}
        showLogin={showLogin}
        setShowLogin={setShowLogin}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </CartProvider>
    </PizzaProvider>
  );
};

export default App;