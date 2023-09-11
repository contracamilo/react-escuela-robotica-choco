import { useState } from "react";
import Miniatura from "../components/Miniatura";
import gatoUno from "../assets/images/gato1.png";
import gatoDos from "../assets/images/gato2.png";
import gatoTres from "../assets/images/gato3.png";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
//Datos de ejemplo

function EjemploParametros() {
  const [showModal, setShowModal] = useState(false);

  const data = [
    {
      id: 1,
      imageUrl: gatoUno,
      altText: "Imagen 1",
    },
    {
      id: 2,
      imageUrl: gatoDos,
      altText: "Imagen 2",
    },
    {
      id: 3,
      imageUrl: gatoTres,
      altText: "Imagen 3",
    },
  ];

  return (
    <>
      <h3>Ejemplo con Parametros</h3>
      <div>
        <h4>Galería de Imágenes</h4>
        <div className="galeria">
          {data.map((image) => (
            <div key={image.id}>
              <Link to={`/modal/${image.id}`}>
                <Miniatura
                  className="thumbnail"
                  action={() => setShowModal(true)}
                  imageUrl={image.imageUrl}
                  altText={image.altText}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Modal data={data} showModal={showModal} setShowModal={setShowModal}/>
    </>
  );
}

export default EjemploParametros;
