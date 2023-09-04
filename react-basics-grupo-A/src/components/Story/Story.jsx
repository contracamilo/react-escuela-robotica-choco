import "./Story.css";

function Story({username, image, variacion}){
  return (
    <div className="story">
      <img
        src={image}
        alt="user"
        className={`story-image story-image-${variacion}`}
      />
      <p className="story-name">{username}</p>
    </div>
  );
}

export default Story;