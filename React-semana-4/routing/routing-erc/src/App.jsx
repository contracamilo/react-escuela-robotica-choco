import reactLogo from './assets/react.svg'
import './App.css'
import RoutesWrapper from './router/Enrutador'
import Nav from './components/Navegacion'

function App() {
  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Ejemplo de Routing</h1>

     {/* Envolvemos la aplicación con 'RoutesWrapper' para el enrutamiento */}
     <RoutesWrapper>
        {/* Renderizamos el componente de navegación 'Nav' */}
        <Nav />
      </RoutesWrapper>
    </>
  )
}

export default App
