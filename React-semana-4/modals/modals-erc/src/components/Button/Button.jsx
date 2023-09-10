/**
 * El componente `Button` es un componente simple que contiene un botón.
 * El botón tiene un solo prop, `action`, que es una función que se llama cuando se hace clic en el botón.
 *
 * @param {function} action La función que se llama cuando se hace clic en el botón.
 */

const Button = ({action}) => {
  return (
    <div>
      <button onClick={action}>Mostrar modal</button>
    </div>
  );
};

//tipado del componente
Button.propTypes = {
    action: () => {},
  };

export default Button;