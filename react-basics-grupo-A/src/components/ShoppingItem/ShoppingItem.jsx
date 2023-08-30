/* eslint-disable react/prop-types */
import './ShoppingItem.css'
import { useState } from 'react'

function ShoppingItem({name, type, image, color, viewProfile}){

    const [selected, setSelected] = useState(false)

    // variables, funciones
    function handleClick(){
        // alert('Diste click a '+ name)
        setSelected(!selected)
        viewProfile({name, type, image, color})
    }

    // lo que voy a renderizar
    return <article
            onClick={handleClick}
            style={{backgroundColor: selected? color : ''}} 
            className="shopping-item">
        <img src={image} alt="" />
        <h2 className={selected? 'selected-title': ''}>{name}</h2>
        <h3>Tipo: {type}</h3>
        </article>
}

export default ShoppingItem