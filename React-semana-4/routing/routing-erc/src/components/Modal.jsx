import { createPortal } from "react-dom";
import { useParams } from "react-router-dom";

export default function Modal({ data, showModal, setShowModal }) {
  const { id } = useParams(); // Obtener el parámetro 'id' de la URL
  const idDelGato = Number(id) - 1; // Convertir 'id' a número y ajustar acceder el índice correcto
  const { imageUrl, altText } = data[idDelGato] || {}; // Obtener datos del gato según el 'id' usando destructuring

  // Componente 'VistaModal' para mostrar el modal
  const VistaModal = ({ isOpen, onClose }) =>
    isOpen && (
      <>
        <div className="modal-overlay">
          <div className="modal">
            <h2>Hola soy el gato No.{id}</h2>
            <img src={imageUrl} alt={altText} />
            <button onClick={onClose}>Cerrar</button>
          </div>
        </div>
      </>
    );

  return (
    <>
      {showModal && 
        createPortal(
          <VistaModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />,
          document.body 
        )}
    </>
  );
}
