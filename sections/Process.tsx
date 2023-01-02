
import { useEffect, useMemo, useState } from "react";
import { useScrollPaging } from "../hooks/useScrollPaging";
import styles from "../scss/sections/process.module.scss"; 


interface ProcessProperties {
    position: number; 
}

const Process = (props: ProcessProperties) => {

    const { position } = props; 
    const titles: string[] = [
        "Next.js",
        "TypeScript",
        "SCSS",
        "Firebase NoSQL",
        "Figma"
    ]; 

    const [selectedIndex] = useScrollPaging({
        position: position,
        pageOffset: 4,
        pageLength: 2,
        itemCount: titles.length
    });

    return (
        <section id={ styles.process } >
            <div id={ styles.windmill } style={{ transform: `translateY(8vh) rotateZ(-${ selectedIndex * 20 }deg)` }}>
            {
                titles.map((title, index) => 
                    <p style={{ transform: `rotateZ(${ index * 20 }deg)` }} key={ index }>{ title }</p>
                )
            }
            </div>

            <div id={ styles.editorial }>
                <div id={ styles.showcase }>
                    <img src="/favicon.png" alt=""></img>
                </div>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum obcaecati nihil minus sapiente dolor! Dicta rerum reiciendis quod modi quidem voluptas consectetur tempora eius!</p>
            </div>

        </section>
    )

}

export default Process; 

