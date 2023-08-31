/* eslint-disable react/prop-types */
import './ShoppingItem.css'
import { useState } from 'react'

function ShoppingItem({name, type, image, color}){

    const [selected, setSelected] = useState(true)
    const [count, setCount] = useState(0);

    function increment () {
        setCount((prevCount) => prevCount + 1)
    }

    function decrement () {
        setCount((prevCount) => prevCount - 1)
    }

    // variables, funciones
    function handleClick(){
        // alert('Diste click a '+ name)
        setSelected(!selected)
        // viewProfile({name, type, image, color})
    }

    // lo que voy a renderizar
    return <article
            style={{backgroundColor: selected? color : ''}} 
            className="shopping-item">
        <img onClick={handleClick} src={image} alt="" />
        <h2 className={selected? 'selected-title': ''}>{name}</h2>
        <h3>Tipo: {type}</h3>
        <div className='counter'>
            <button onClick={decrement}>-</button>
            <span> {count} </span>
            <button onClick={increment}>+</button>
        </div>
        </article>
}

export default ShoppingItem