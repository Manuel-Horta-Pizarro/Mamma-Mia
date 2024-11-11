/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            fetchProfile();
        }
    }, [token]);

    const login = async (email, password) => {
        try {
            const response = await axios.post('/api/auth/login', { email, password });
            const { token, email: userEmail } = response.data;
            setToken(token);
            setUser({ email: userEmail });
            localStorage.setItem('token', token);
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    const register = async (email, password) => {
        try {
            const response = await axios.post('/api/auth/register', { email, password });
            const { token, email: userEmail } = response.data;
            setToken(token);
            setUser({ email: userEmail });
            localStorage.setItem('token', token);
        } catch (error) {
            console.error('Error al registrar:', error);
        }
    };

    const fetchProfile = async () => {
        try {
            const response = await axios.get('/api/auth/me');
            setUser(response.data);
        } catch (error) {
            console.error('Error al obtener el perfil:', error);
        }
    };

    const logout = () => {
        setToken('');
        setUser(null);
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
    };

    const checkout = async (cart) => {
        try {
            const response = await axios.post('/api/checkouts', { cart });
            return response.data;
        } catch (error) {
            console.error('Error al realizar la compra:', error);
        }
    };

    return (
        <UserContext.Provider value={{ user, token, login, register, logout, checkout }}>
            {children}
        </UserContext.Provider>
    );
};
