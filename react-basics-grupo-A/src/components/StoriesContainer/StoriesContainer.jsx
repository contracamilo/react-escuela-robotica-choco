import "./StoriesContainer.css"
import Story from "../Story/Story";

function StoriesContainer({stories}){
    return(
        <div className="stories-container">
        {stories.map(({image, username, variacion}, idx)=> 
        <Story 
            key={idx}
            image={image} 
            username={username} 
            variacion={variacion}
        />)}
        </div>
    )
}

export default StoriesContainer;