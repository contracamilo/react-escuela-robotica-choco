import './App.css'
import ShoppingItem from './components/ShoppingItem/ShoppingItem'

function App() {
/*
  const nombre = "Mundo Juliana";
  const nombres = ["Juli", "Jordan", "Naida", "Arinson", "Vilvic"];
  const randomNumber = ~~(Math.random()*5); // Math.floor() === ~~

  const pagoInicial = 50000;
  const hePagado = 33532;

  const isLogged = true;*/

  const mercado = [
    {
      name: "Manzana",
      type: "fruit",
      color: "red",
      image: "https://img.freepik.com/vector-gratis/ilustracion-icono-dibujos-animados-fruta-manzana-concepto-icono-fruta-alimentos-aislado-estilo-dibujos-animados-plana_138676-2922.jpg?w=2000"
    },
    {
      name: "Zanahoria",
      type: "vegetable",
      color: "orange",
      image: "https://static.vecteezy.com/system/resources/previews/008/719/418/non_2x/cute-carrot-cartoon-vector.jpg"
    },
    {
      name: "Uva",
      type: "fruit",
      color: "purple",
      image: "https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-fruta-uva-estilo-dibujos-animados-plana_138676-2877.jpg?w=360"
    },
    {
      name: "Pescado",
      type: "protein",
      color: "chocolate",
      image: "https://img.freepik.com/vector-premium/pescado-frito-sobre-hoja-lechuga-limones-especias_456984-271.jpg?w=2000"
    },
    {
      name: "Huevo",
      type: "protein",
      color: "yellow",
      image: "https://i.pinimg.com/1200x/d2/0d/d0/d20dd00eb3611869b3580c80d40bb70e.jpg"
    }
  ]

  const frutas = mercado.filter((item)=> item.type === 'fruit')
  const proteinas = mercado.filter((item)=> item.type === 'protein')

  return (
    <>
      {/* <h1 style={{color: isLogged?'green': 'red'}}>Hola {nombre}!</h1>
      <h1 className="main-title">Hola {nombres[randomNumber]}!</h1>
      <h2>Compraste: {pagoInicial}</h2>
      <h2>Pagaste: {hePagado}</h2>
      <h2>Debes: {pagoInicial-hePagado}</h2>

      {
       isLogged ? <h1 style={{color: 'green'}}>Estas Loggeado</h1> : <h1 style={{color: 'red'}}>NO Estas Loggeado</h1>
      }

      <h2>Lista Mercado:</h2>
      <ul style={{backgroundColor:'gray'}}>
        {
          mercado.map((item)=> <li key={item.name} style={{color: item.color}}>{item.name}</li>)
        }
      </ul>
      <h2>Lista De frutas:</h2>
      <ul>
        {
          frutas.map((item)=> <li key={item.name} style={{color: item.color}}>{item.name}</li>)
        }
      </ul>
      <h2>Lista De proteinas:</h2>
      <ul>
        {
          proteinas.map((item)=> <li key={item.name} style={{color: item.color}}>{item.name}</li>)
        }
      </ul> */}

      <h1>Lista de componentes</h1>
      <section className='shopping-item-list'>
      {
        mercado.map((item)=> 
        <ShoppingItem 
        name={item.name} 
        type={item.type} 
        image={item.image} 
        color={item.color}/> )
      }

      </section>
    </>
  )
}

export default App
