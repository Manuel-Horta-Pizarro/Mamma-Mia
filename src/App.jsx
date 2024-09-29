import { useState } from "react";
import Footer from "./assets/components/home/footer/Footer";
import Navbar from "./assets/components/home/navbar/Navbar";
import Login from "./assets/components/home/login/Login";
import Register from "./assets/components/home/registro/Register";
import Home from "./assets/components/home/Home";

const App = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <Navbar
        showRegister={showRegister}
        setShowRegister={setShowRegister}
        showLogin={showLogin}
        setShowLogin={setShowLogin}
      />
      {showRegister && <Register />}
      {showLogin && <Login />}
      <Home/>
      <Footer />
    </div>
  );
};

export default App;
