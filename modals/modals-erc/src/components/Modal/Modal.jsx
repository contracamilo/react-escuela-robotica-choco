import {  useRef } from "react";

const Modal = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);

    const closeModal = () => {
        //cerrado por referencia
        modalRef.current.style.display = 'none';
        //cerrado con manejo de estado
        onClose();
    };
  

    return isOpen && (<div className="modal-overlay" ref={modalRef}>
        <div className="modal">
          <h2>Somos la Escuela de Robotica del Choco</h2>
          <p>Contenido de la modal.</p>
          <button onClick={closeModal}>Cerrar</button>
        </div>
      </div>);
};

//tipado de las propiedades del componente
Modal.propTypes = {
    isOpen: Boolean,
    onClose: () => {}
  }

export default Modal;