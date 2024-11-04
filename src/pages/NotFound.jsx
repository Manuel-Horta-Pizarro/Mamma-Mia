import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Página No Encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/">Volver a la página principal</Link>
    </div>
  );
};

export default NotFound;