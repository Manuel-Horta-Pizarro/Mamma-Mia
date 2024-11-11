/* eslint-disable react/prop-types */
import Modal from 'react-modal';
import './Modal.css';

const PizzaDetailsModal = ({ pizza, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Detalles de la Pizza"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <h2>{pizza.nombre}</h2>
        <p className="pizza-description">{pizza.descripcion}</p>
        <img src={pizza.img} alt={pizza.nombre} />
        <p>Precio: ${pizza.precio}</p>

        <h3>Ingredientes:</h3>
        <ul>
          {pizza.ingredientes.map((ingredientes, index) => (
            <li key={index}>{ingredientes}</li>
          ))}
        </ul>

        <button onClick={onClose}>Cerrar</button>
      </div>
    </Modal>
  );
};

export default PizzaDetailsModal;