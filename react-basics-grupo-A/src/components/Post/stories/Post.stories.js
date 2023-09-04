import Post from "../Post";
import { faker } from "@faker-js/faker";

//config
export default {
    title: "Posts/Un Solo Post",
    component: Post,
}

export const InstaStory = {
    args: {
        username: faker.person.firstName(), 
        name: faker.person.fullName(), 
        photo: faker.image.urlLoremFlickr(), 
        profilePic: faker.image.avatar(),
    }
}