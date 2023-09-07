import "./Post.css";

function Post({username, name, photo, profilePic}){
    return(
        <article className="Post">
            <header>
                <div className="Post-user">
                    <div className="Post-user-profilepicture">
                    <img src={profilePic} alt="John D. Veloper" />
                </div>
                <div className="Post-user-nickname">
                    <span>{username}</span>
                </div>
                </div>
            </header>
            <div className="Post-image">
                <div className="Post-image-bg">
                    <img alt="Icon Living" src={photo} />
                </div>
            </div>
            <div className="Post-caption">
                <strong>{name} </strong> Loving Educative!
            </div>

        </article>
    )
}

export default Post;