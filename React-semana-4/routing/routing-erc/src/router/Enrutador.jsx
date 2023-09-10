// Importamos las dependencias necesarias de react-router-dom
import { useRoutes, BrowserRouter } from "react-router-dom";

// Importamos los componentes de las páginas que utilizaremos
import { ErrorPage } from "../pages/ErrorPage"; // Página de error personalizada
import AboutPage from "../pages/AboutPage"; // Página "Acerca de"
import HomePage from "../pages/HomePage"; // Página de inicio

// Definimos un componente llamado AppRoutes
const AppRoutes = () => {
  // Utilizamos useRoutes para configurar las rutas de nuestra aplicación
  const routes = useRoutes([
    {
      path: "/", // Ruta de inicio
      element: <HomePage />, // Componente a mostrar cuando la ruta coincide
    },
    {
      path: "/nosotros", // Ruta "nosotros" o "Acerca de"
      element: <AboutPage />, // Componente para la página "Acerca de"
    },
    {
      path: "*", // Ruta comodín, se usa cuando ninguna otra ruta coincide
      element: <ErrorPage />, // Componente para la página de error
    },
  ]);

  // Devolvemos las rutas configuradas
  return routes;
};

// Definimos un componente llamado RoutesWrapper que envuelve la aplicación
const RoutesWrapper = ({children}) => {
  return (
    <BrowserRouter> {/* Usamos BrowserRouter para gestionar las rutas */}
      {children} {/* Pasamos los componentes hijos como prop */}
      <AppRoutes /> {/* Renderizamos las rutas configuradas */}
    </BrowserRouter>
  );
};

// Exportamos el componente RoutesWrapper
export default RoutesWrapper;
