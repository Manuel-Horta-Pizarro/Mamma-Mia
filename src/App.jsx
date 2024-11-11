import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./assets/components/home/footer/Footer";
import Navbar from "./assets/components/home/navbar/Navbar";
import Cart from "./pages/carrito/Cart";
import Login from "./pages/login/Login";
import Register from "./pages/registro/Register";
import Home from "./assets/components/home/Home";
import { CartProvider } from "./assets/components/context/CartContext";
import Pizza from "./pages/Pizza";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import { PizzaProvider } from "./assets/components/context/PizzaContext";
import { UserContext, UserProvider } from "./assets/components/context/UserContext";
import ProtectedRoute from "./pages/carrito/ProtectedRoute";

const App = () => {
    const { token } = useContext(UserContext);

    return (
        <UserProvider>
            <PizzaProvider>
                <CartProvider>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
                        <Route path="/register" element={!token ? <Register /> : <Navigate to="/" />} />
                        <Route path="/cart" element={<ProtectedRoute redirectTo="/login"><Cart /></ProtectedRoute>} />
                        <Route path="/pizza/:id" element={<Pizza />} />
                        <Route path="/profile" element={<ProtectedRoute redirectTo="/login"><Profile /></ProtectedRoute>} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </CartProvider>
            </PizzaProvider>
        </UserProvider>
    );
};

export default App;