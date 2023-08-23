import './ShoppingItem.css'
import { useState } from 'react'

function ShoppingItem({name, type, image}){

    const [comprado, setComprado] = useState(false)

    function handleClick(){
        setComprado(!comprado)
    }


    return <article className={`shopping-item ${comprado?'item-comprado':''}`}  onClick={handleClick}>
        {/* Para hacer cambios de estilos: 
        <article className="shopping-item" style={{backgroundColor: comprado?'green':''}}  onClick={handleClick}></article>
         */}
        <img src={image} alt="" />
        <h2>{name}</h2>
        <p>Tipo: {type}</p>
         </article>
}

export default ShoppingItem