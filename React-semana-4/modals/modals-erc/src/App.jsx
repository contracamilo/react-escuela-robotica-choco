import { useRef, useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import ModalConPortal from "./components/Modal/ModaleConPortal";
import { EjemploRef } from "./components/EjemploReferencia/EjemploRef";

function App() {
  const modalRef = useRef(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const mostrarModalNormal = false;

  return (
    <div className="App">
      <h2>Ejemplo de Modal en React</h2>

      {mostrarModalNormal ? (
        <div className="normal-modal-container">
          <Button action={openModal} />
          <Modal isOpen={modalIsOpen} onClose={closeModal} ref={modalRef} />
        </div>
      ) : (
        <div className="portal-modal-container">
          <ModalConPortal />
        </div>
      )}

      <h2>Ejemplo de Refeencia en React</h2>
      <EjemploRef />
    </div>
  );
}

export default App;
