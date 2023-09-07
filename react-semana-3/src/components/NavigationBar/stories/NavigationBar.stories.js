import NavigationBar from "../NavigationBar";
import { faker } from "@faker-js/faker";

export default {
    title: "Barra Navegación/Navbar Completa",
    component: NavigationBar
}

export const NavBarStory = {
    args: {
        profilePicture: faker.image.avatar()
    }
}