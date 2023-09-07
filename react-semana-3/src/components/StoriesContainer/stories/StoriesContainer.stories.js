import StoriesContainer from "../StoriesContainer";
import { faker } from "@faker-js/faker";


export default {
    title: 'Historias Instagram/Varias Historias',
    component: StoriesContainer,
    argTypes: {
        conteoHistorias: {
            control: {
              type: 'range',
              min: 0,
              max: 20,
            },
          },
    }
}

const generadorDeHistorias = (cantidad) => {
    return Array.from(Array(cantidad)).map(()=> ({
        username: faker.person.fullName(),
        image: faker.image.avatar(),
        variacion: faker.helpers.arrayElement([
            "closeFriends", 
            "noVisto", 
            "visto"
        ]),
    }))
}


export const ProfileContainer = {
    args: {
        stories: generadorDeHistorias(10),
        conteoHistorias: 10,
    }
}
