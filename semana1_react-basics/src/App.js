import './App.css';
import ShoppingItem from './components/ShoppingItem/ShoppingItem'

function App() {
  const listaMercado = [
    {
      nombre: 'Manzana',
      tipo: 'fruta',
      color: 'red',
      image: 'https://healthjade.com/wp-content/uploads/2017/10/apple-fruit.jpg'
    },
    {
      nombre: 'Limon',
      tipo: 'fruta',
      color: 'green',
      image: 'https://www.spa-puntacana.com/wp-content/uploads/2016/03/news_photo_04.jpg'
    },
    {
      nombre: 'Zanahoria',
      tipo: 'verdura',
      color: 'orange',
      image: 'https://www.mercadoscampesinos.gov.co/wp-content/uploads/2021/04/zanahorias.jpg'
    },
    {
      nombre: 'Pescado',
      tipo: 'proteina',
      color: 'brown',
      image: 'https://comidaecuatoriana.com.es/wp-content/uploads/2020/01/arroz-con-pescado-frito-scaled.jpg'
    }
  ]

  const post = [
    {
      user: 'pepito',
      likes: 30,
      saved: true,
      image: '/img1.jpg',
      caption: 'hola, mi foto'
    }
  ]

  return (
    <div className="App">

<h2>Aqui estan los components : </h2>
<section className="shopping-list">
{
  listaMercado.map((item)=> <ShoppingItem name={item.nombre} type={item.tipo} image={item.image}/>)
}  


</section>
    </div>
  );
}

export default App;
