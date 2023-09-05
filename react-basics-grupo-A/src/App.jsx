import "./App.css";
import ShoppingArea from "./components/ShoppingArea/ShoppingArea";
import { useEffect, useRef, useState } from "react";

function App() {
  const [selected, setshoppingItem] = useState(false);
  const [userName, setUserName] = useState("Mao");
  const previousName = useRef(null);
  const contadorRender = useRef(0);
  const inputRef = useRef();

  const updateShoppingItem = (item) => {
    setshoppingItem(item);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    previousName.current = userName;
  }, [userName]);

  useEffect(() => {
    contadorRender.current = contadorRender.current + 1;
  });

  function focusOnInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <h1>Lista de componentes</h1>
      windowWidth: {windowWidth}
      <div>
        <input
          ref={inputRef}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <button onClick={focusOnInput}>Focus</button>
      <h3>
        Nombre de Usuario: {userName}
        {previousName.current ? ` y antes era ${previousName.current}` : ""}
      </h3>
      <p>Hemos hecho {contadorRender.current} re-renders</p>
      <ShoppingArea mercado={mercado} updateShoppingItem={updateShoppingItem} />
    </>
  );
}

export default App;
