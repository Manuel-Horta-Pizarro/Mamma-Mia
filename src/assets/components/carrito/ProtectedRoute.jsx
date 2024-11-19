/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from'../context/UserContext';

const ProtectedRoute = ({ children, redirectTo }) => {
  const { token } = useContext(UserContext);
  return token ? children : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;