/* eslint-disable react/prop-types */
import { ThemeContext } from "../../App";
import "./ShoppingItem.css";
import { useState, useEffect, useContext } from "react";

function ShoppingItem({ name, type, image, color }) {
  const [selected, setSelected] = useState(true);
  const [count, setCount] = useState(0);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("onRender");
  });

  useEffect(() => {
    console.log("onMount");
  }, []);

  useEffect(() => {
    console.log("UseEffect function");
    return () => {
      console.log("useEffect return");
    };
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  // variables, funciones
  function handleClick() {
    // alert('Diste click a '+ name)
    setSelected(!selected);
    // viewProfile({name, type, image, color})
  }

  // lo que voy a renderizar
  return (
    <article
      style={{ backgroundColor: selected ? color : "" }}
      className="shopping-item"
    >
      <div>The theme is {theme}</div>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Change To Light Theme
      </button>
      <img onClick={handleClick} src={image} alt="" />
      <h2 className={selected ? "selected-title" : ""}>{name}</h2>
      <h3>Tipo: {type}</h3>
      <div className="counter">
        <button onClick={decrement}>-</button>
        <span> {count} </span>
        <button onClick={increment}>+</button>
      </div>
    </article>
  );
}

export default ShoppingItem;
