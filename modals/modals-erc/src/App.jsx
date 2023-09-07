import { useRef, useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import Modal from './components/Modal/Modal';



function App() {
  const modalRef = useRef(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  return (
    <div className="App">
      <h1>Ejemplo de Modal en React con useRef</h1>

      <Button action={openModal}/>
      <Modal isOpen={modalIsOpen} onClose={closeModal} ref={modalRef} />
    </div>
  );
}

export default App
