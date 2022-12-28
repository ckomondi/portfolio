

import { useEffect, useMemo, useState } from "react";
import { projects } from "../data/projects";
import Webview from "../elements/Webview";
import { useScrollPaging } from "../hooks/useScrollPaging";
import styles from "../scss/sections/portfolio.module.scss";
import Icon from "../utilities/elements/Icon";
import { remToPixels } from "../utilities/functions/viewport";

interface PortfolioProps {
    position: number; 
}

const Portfolio = (props: PortfolioProps) => {

    const [highlightedIndex] = useScrollPaging({
        position: props.position,
        pageOffset: 2,
        pageLength: 1,
        itemCount: projects.length
    });

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
            <div className={ styles.viewport }>
                <div className={ styles.content } style={{ transform: `translateX(-${ remToPixels(24) * highlightedIndex }px)` }}>
                {
                    projects.map((project, index) => 
                        <Webview index={ index } isHighlighted={ index === highlightedIndex } key={ index } project={ project } />
                    )
                }
                </div>
            </div>
            </div>

            </div>


        </section>
    )
}




export default Portfolio; 


