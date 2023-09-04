import Post from "../Post/Post";

function PostContainer({posts}) {
    return (
        posts.map(({username, name, photo, profilePic})=> 
            <Post
                key={username}
                username={username}
                name={name}
                photo={photo}
                profilePic={profilePic}
            />
        )
    )
}

export default PostContainer;