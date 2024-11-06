import { useState, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./assets/components/home/footer/Footer";
import Navbar from "./assets/components/home/navbar/Navbar";
import Cart from "./pages/carrito/Cart.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/registro/Register.jsx";
import Home from "./assets/components/home/Home.jsx"; 
import { CartProvider } from "./assets/components/context/CartContext.jsx";
import Pizza from "./pages/Pizza.jsx"; 
import NotFound from "./pages/NotFound.jsx"; 
import Profile from "./pages/Profile.jsx";
import { PizzaProvider } from "./assets/components/context/PizzaContext.jsx";
import { UserContext } from "./assets/components/context/UserContext.jsx";
import ProtectedRoute from "./pages/carrito/ProtectedRoute.jsx"; 

const App = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { token } = useContext(UserContext);
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
          <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
          <Route path="/register" element={!token ? <Register /> : <Navigate to="/" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/profile"element={<ProtectedRoute redirectTo="/login"><Profile /></ProtectedRoute>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </CartProvider>
    </PizzaProvider>
  );
};

export default App;