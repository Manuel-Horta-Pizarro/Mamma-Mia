import { useState, useContext } from 'react';
import { UserContext } from '../../assets/components/context/UserContext';
import { useNavigate } from 'react-router-dom';
import"./login.css";

const Login = () => {
    const { login } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/profile');
        } catch {
            setError('Error al iniciar sesión');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
            <button type="submit">Iniciar sesión</button>
        </form>
    );
};

export default Login;