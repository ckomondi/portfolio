

import { Project } from "../models/project"
import { Technology } from "../models/technology"



const projects : Project[] = [
    { title: "Snacks R Us", link: "snacksrus.store", image: "/snacksrus.png", description: "A Fullstack E-Commerse website for a fictional snack retailer", technologies: ["react", "next"] }, 

    { title: "Wavyfy", link: "wavyfy.web.app", image: "/wavyfy.png", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe numquam voluptatem omnis, fugit mollitia nesciunt, quibusdam", technologies: ["react", "next"] },

    { title: "Afyadux", link: "afyadux.org", image: "/afyadux.png", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe numquam voluptatem omnis, fugit mollitia nesciunt, quibusdam", technologies: ["react", "next"] },
]

const technologies : Technology[] = [
    { title: "Next.js", image: "/nextjs.png" },
    { title: "TypeScript", image: "/typescript.svg" },
    { title: "Firebase", image: "/firebase.svg" },
    { title: "SCSS", image: "/sass.png" },
    { title: "Figma", image: "/figma.svg" },
]



export { projects, technologies }

