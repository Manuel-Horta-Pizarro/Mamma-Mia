import { useContext } from 'react';
import { UserContext } from '../assets/components/context/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { user, logout } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div>
            <h1>Perfil de Usuario</h1>
            <p>Email: {user?.email}</p>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
    );
};

export default Profile;