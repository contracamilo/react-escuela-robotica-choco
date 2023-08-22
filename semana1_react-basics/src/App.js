import './App.css';

function App() {

  const names = ["Juliana", "Daniel", "Josser", "Ferly", "Alejandro"]
  const randomNumber = Math.floor(Math.random()*5)
  const compraInicial = 50000
  const deudaPagada = 21234
  const isLogged = false
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  const listaMercado = [
    {
      nombre: 'Manzana',
      tipo: 'fruta',
      color: 'red'
    },
    {
      nombre: 'Limon',
      tipo: 'fruta',
      color: 'green'
    },
    {
      nombre: 'Zanahoria',
      tipo: 'verdura',
      color: 'orange'
    },
    {
      nombre: 'Pescado',
      tipo: 'proteina',
      color: 'brown'
    }
  ]

  const listaFrutas = listaMercado.filter((item)=> item.tipo === 'fruta')
  const listaVerduras = listaMercado.filter((item)=> item.tipo === 'verdura')

  return (
    <div className="App">

    <h1 style={{backgroundColor: color}}>Hola {names[randomNumber]} </h1>
    <h2>compraste: {compraInicial}</h2>
    <h2>Has pagado: {deudaPagada}</h2>
    <h2>Debes: {compraInicial - deudaPagada}</h2>
    {
      isLogged? <h3>Si estas loggeada</h3> : <h3>NO estas loggeada</h3>
    }
    <h2>Lista de mercado:</h2>
    <ul>
    {
      listaMercado.map((item)=> <li style={{color: item.color}}>{item.nombre}</li> )
    }
</ul>

<h2>Lista de frutas:</h2>
    <ul>
    {
      listaFrutas.map((item)=> <li style={{color: item.color}}>{item.nombre}</li> )
    }
</ul>

<h2>Lista de verduras:</h2>
    <ul>
    {
      listaVerduras.map((item)=> <li style={{color: item.color}}>{item.nombre}</li> )
    }
</ul>
    </div>
  );
}

export default App;
