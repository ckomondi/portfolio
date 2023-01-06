


import { ParallaxLayer } from "@react-spring/parallax";
import styles from "../scss/sections/intro.module.scss";
    

const Intro = () => {
    return (
        <section id={ styles.intro }>

            <div id={ styles.showcase }>
                <img src="/centra.png" alt=""></img>
            </div>

            <div className={ styles.widgets }>
                <div className={ `${ styles.widget } ${ styles.why }` }>
                    <h5>Design meets Technology</h5>
                    <p>Web developer focused on turning ideas into functionally beautiful business applications</p>
                </div>
            
                <div></div>
            
                <div className={ `${ styles.widget } ${ styles.how }` }>
                    <h5>From 0000000 to 1100100</h5>
                    <p>Design. Prototype. Develop. Iterate. Repeat.</p>
                </div>
            </div>

            <div className={ styles.titles }>
                <h1>web</h1>
                <h1>Dev<span>.</span></h1>
            </div>
        </section>
    )
}

export default Intro; 


