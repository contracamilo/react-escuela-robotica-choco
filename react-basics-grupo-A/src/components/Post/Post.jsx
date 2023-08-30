import ShoppingItem from "../ShoppingItem/ShoppingItem";

function Post({title, postContent, cards}) {
    return (
        <>
            <h2>{title}</h2>
            <p>{postContent}</p>
            {
                cards.map((item)=> 
                <ShoppingItem 
                    key={item.name}
                    name={item.name} 
                    type={item.type} 
                    image={item.image} 
                    color={item.color}
                    //viewProfile={updateShoppingItem}
                /> 
                )
            }
        </>
    )
}

export default Post;