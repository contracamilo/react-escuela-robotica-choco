import { useRoutes, BrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage"; 
import AboutPage from "../pages/AboutPage"; 
import HomePage from "../pages/HomePage";
import EjemploParametros from "../pages/EjemploParametros";
import ModalContainer from "../components/Modal";


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
      path: "/ejemplo", // Ruta "nosotrejemploos" o "Acerca de"
      element: <EjemploParametros />, // Componente para la página "Ejemplo de paramentrose"
    },
    {
      path: "/modal/:id",  //parametro dinámico
      element: <EjemploParametros />, // Componente para la página "Ejemplo de paramentrose"
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
