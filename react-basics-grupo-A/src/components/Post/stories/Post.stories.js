import Post from "../Post.jsx"
import { faker }  from "@faker-js/faker"

export default {
    title: "ClaseA/Post",
    component: Post,
}

const generarPosts = (length) => (
    Array.from(Array(length)).map(()=>({
        name: faker.person.fullName(),
        color: "faker.color.random()",
        type: faker.internet.userName(),
        image: faker.image.avatar(),
        
    }))
)

export const PostStory = {
    args: {
        title: "Mi titulo",
        postContent: "lorem ipsum",
        cards: generarPosts(7)
    },
}

