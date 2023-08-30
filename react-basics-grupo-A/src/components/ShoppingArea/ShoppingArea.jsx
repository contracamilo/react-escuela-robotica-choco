import ShoppingItem from '../ShoppingItem/ShoppingItem'

function ShoppingArea({mercado, updateShoppingItem}) {
    return (
        <section className='shopping-item-list'>
      {
        mercado.map((item)=> 
        <ShoppingItem 
            key={item.name}
            name={item.name} 
            type={item.type} 
            image={item.image} 
            color={item.color}
            viewProfile={updateShoppingItem}
        /> 
        )
      }

      </section>
    )
}

export default ShoppingArea