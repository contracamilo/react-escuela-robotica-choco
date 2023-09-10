import { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from './Modal.jsx';

export default function ModalConPortal() {
 //hook de estado para manejar visualización de la modal
  const [showModal, setShowModal] = useState(false);
  //traemos el contenedor del DOM
  const portalContainer = document.getElementById('portal-erc');
  
  
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Abrir modal usando portal
      </button>
      {showModal && createPortal(
        //componente que ira al portal
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} />,
        //elemento del DOM que contendrá la modal
        portalContainer
      )}
    </>
  );
}