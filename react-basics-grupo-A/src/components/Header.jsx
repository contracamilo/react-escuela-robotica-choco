import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../App";

function Header() {
  const { theme } = useContext(ThemeContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <div>
      <h1>El Tema es {theme}</h1>
      <span>windowWidth: {windowWidth}</span>
    </div>
  );
}

export default Header;
