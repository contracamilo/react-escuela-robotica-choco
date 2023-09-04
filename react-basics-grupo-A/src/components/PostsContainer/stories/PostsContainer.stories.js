import PostContainer from "../PostsContainer";
import { faker } from "@faker-js/faker";

export default {
    title: "Posts/Muchos Posts",
    component: PostContainer,
}

const generadorDePost = (cantidad) => {
    return Array.from(Array(cantidad)).map(()=> ({
        username: faker.person.firstName(), 
        name: faker.person.fullName(), 
        photo: faker.image.urlLoremFlickr(), 
        profilePic: faker.image.avatar(),
    }))
}


export const PostContainerStory = {
    args: {
        posts: generadorDePost(10)
    }
}