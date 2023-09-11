
const Miniatura = ({ imageUrl, altText, action }) => {
  return (
    <div className="thumbnail" onClick={action}>
      <img src={imageUrl} alt={altText} />
    </div>
  );
};

export default Miniatura;