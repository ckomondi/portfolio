
import { CSSProperties, useEffect, useMemo, useState } from "react";
import { technologies } from "../data/data";
import { useScrollPaging } from "../hooks/useScrollPaging";
import styles from "../scss/sections/tech.module.scss"


interface ProcessProperties {
    position: number; 
}

const Technologies = (props: ProcessProperties) => {

    const { position } = props; 

    const [selectedIndex] = useScrollPaging({
        position: position,
        pageOffset: 4,
        pageLength: 2,
        itemCount: technologies.length
    });


    return (
        <section id={ styles.process } >
            <div id={ styles.windmill } style={{ transform: `translateY(8vh) rotateZ(-${ selectedIndex * 20 }deg)` }}>
            {
                technologies.map((tech, index) => 
                    <p className={ (selectedIndex === index) ? styles.selected : undefined } style={{ transform: `rotateZ(${ index * 20 }deg)` }} key={ index }>{ tech.title }</p>
                )
            }
            </div>

            <div id={ styles.editorial }>
                <div id={ styles.showcase }>
                    <img src={ technologies[selectedIndex].image } alt=""></img>
                </div>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum obcaecati nihil minus sapiente dolor! Dicta rerum reiciendis quod modi quidem voluptas consectetur tempora eius!</p>
            </div>

        </section>
    )

}

export default Technologies; 

