import { Outlet, NavLink } from "react-router-dom";

function Nav() {
    return (
      <div>
        {/* En este componente vemos el marcado para los links de navegacion. */}  
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/nosotros">Nosotros</NavLink>
            </li>
          </ul>
        </nav>
  
        <hr />
  
        {/* Un <Outlet> representa lo que sea que la ruta secundaria/anidada actualmente activa, 
        así que puedes pensar en este <Outlet> como un marcador de posición para las 
        rutas secundarias que definimos arriba. */}
        <Outlet />
      </div>
    );
  }

export default Nav;
