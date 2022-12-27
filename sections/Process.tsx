
import { useState } from "react";
import styles from "../scss/sections/process.module.scss"; 


const Process = () => {

    const titles: string[] = [
        "Next.js",
        "TypeScript",
        "Svelte",
        "SCSS",
        "Firebase",
    ]; 

    const [selectedIndex, setSelectedIndex] = useState(0); 
    const rotateWindmill = () => {
        setSelectedIndex((index) => index + 1); 
    }


    return (
        <section id={ styles.process }>
            <div id={ styles.windmill } style={{ transform: `rotateZ(-${ selectedIndex * 20 }deg);` }} >
            {
                titles.map((title, index) => 
                    <p style={{ transform: `rotateZ(${ index * 20 }deg);` }} key={ index }>{ title }</p>
                )
            }
            </div>

            <div id={ styles.editorial }>
                <div id={ styles.showcase }>
                    <img src="/favicon.png" alt=""></img>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id culpa amet, eligendi laudantium esse sint, molestiae veritatis non, accusantium ratione voluptates labore. Iste, tempora.</p>
            </div>

        </section>
    )

}

export default Process; 

