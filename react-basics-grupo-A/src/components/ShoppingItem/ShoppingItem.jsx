/* eslint-disable react/prop-types */
import "./ShoppingItem.css";
import { useState } from "react";

function ShoppingItem({ name, type, image, color }) {
  const [selected, setSelected] = useState(true);
  const [contador, setContador] = useState(0);

  // variables, funciones
  function handleClick() {
    // alert('Diste click a '+ name)
    setSelected(!selected);
    // viewProfile({name, type, image, color})
  }

  function incrementa() {
    setContador(contador + 1);
  }

  function decrementa() {
    setContador(contador - 1);
  }

  // lo que voy a renderizar
  return (
    <article
      style={{ backgroundColor: selected ? color : "" }}
      className="shopping-item"
    >
      <img onClick={handleClick} src={image} alt="" />
      <h2 className={selected ? "selected-title" : ""}>{name}</h2>
      <h3>Tipo: {type}</h3>
      <div className="counter">
        <button onClick={decrementa}>-</button>
        <span> {contador} </span>
        <button onClick={incrementa}>+</button>
      </div>
    </article>
  );
}

export default ShoppingItem;
