import "./App.css";
import ShoppingArea from "./components/ShoppingArea/ShoppingArea";
import { useEffect, useState } from "react";

function App() {
  const [selected, setshoppingItem] = useState(false);

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
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  const updateShoppingItem = (item) => {
    setshoppingItem(item);
  };

  const mercado = [
    {
      name: "Manzana",
      type: "fruit",
      color: "red",
      image:
        "https://img.freepik.com/vector-gratis/ilustracion-icono-dibujos-animados-fruta-manzana-concepto-icono-fruta-alimentos-aislado-estilo-dibujos-animados-plana_138676-2922.jpg?w=2000",
    },
    {
      name: "Zanahoria",
      type: "vegetable",
      color: "orange",
      image:
        "https://static.vecteezy.com/system/resources/previews/008/719/418/non_2x/cute-carrot-cartoon-vector.jpg",
    },
    {
      name: "Uva",
      type: "fruit",
      color: "purple",
      image:
        "https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-fruta-uva-estilo-dibujos-animados-plana_138676-2877.jpg?w=360",
    },
    {
      name: "Pescado",
      type: "protein",
      color: "chocolate",
      image:
        "https://img.freepik.com/vector-premium/pescado-frito-sobre-hoja-lechuga-limones-especias_456984-271.jpg?w=2000",
    },
    {
      name: "Huevo",
      type: "protein",
      color: "yellow",
      image:
        "https://i.pinimg.com/1200x/d2/0d/d0/d20dd00eb3611869b3580c80d40bb70e.jpg",
    },
  ];

  const frutas = mercado.filter((item) => item.type === "fruit");
  const proteinas = mercado.filter((item) => item.type === "protein");

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <h1>Lista de componentes</h1>
      windowWidth: {windowWidth}
      {/* { !selected ? 
        <ShoppingArea 
          mercado={mercado}
          updateShoppingItem={updateShoppingItem}
        /> 
        : <span>seleccionaste algo</span>} */}
      <ShoppingArea mercado={mercado} updateShoppingItem={updateShoppingItem} />
      <ul>
        <li>
          <button>Post</button>
          <button>commentarios</button>
        </li>
      </ul>
    </>
  );
}

export default App;
