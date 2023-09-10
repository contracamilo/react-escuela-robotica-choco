import { useRef } from 'react';

export const EjemploRef = () => {
  // Crea una referencia para el elemento de entrada
  const inputRef = useRef(null);

  // Función para cambiar el color del elemento de entrada
  const cambiarColor = () => {
    // Accede al elemento de entrada utilizando la referencia
    const inputElement = inputRef.current;

    // Cambia el color del elemento de entrada
    if (inputElement) {
      inputElement.style.backgroundColor = 'lightblue';
    }
  };

  return (
    <div>
      <h1>Ejemplo de Referencias en React</h1>
      <input type="text" ref={inputRef} />
      <button onClick={cambiarColor}>Cambiar Color</button>
    </div>
  );
}
