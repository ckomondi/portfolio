

import { useState } from "react";
import { projects } from "../data/projects";
import Webview from "../elements/Webview";
import styles from "../scss/sections/portfolio.module.scss";
import Icon from "../utilities/elements/Icon";


const Portfolio = () => {

    const [highlightedIndex, setHighlightedIndex] = useState(0); 

    return (

        <section id={ styles.portfolio }>
            
            <div id={ styles.showcase }>
            <div className={ styles.inspector }>
                <span>
                    <h3>Afyadux</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe numquam voluptatem omnis, fugit mollitia nesciunt, quibusdam</p>
                </span>

                <div className={ styles.pagination }>
                    <Icon isDisabled={ highlightedIndex === 0 }>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.57 5.93005L3.5 12.0001L9.57 18.0701" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.5 12H3.66998" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </Icon>

                    <Icon>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.43 5.93005L20.5 12.0001L14.43 18.0701" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3.5 12H20.33" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </Icon>
                </div>

            </div>

            <div className={ styles.scrollview }>
                <div className={ styles.content }>
                {
                    projects.map((project, index) => 
                        <Webview isHighlighted={ index === highlightedIndex } key={ index } project={ project } />
                    )
                }
                </div>
            </div>
            </div>


        </section>
    )
}


export default Portfolio; 

