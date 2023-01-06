

import { useEffect, useMemo, useState } from "react";
import { projects } from "../data/data";
import Webview from "../elements/Webview";
import { useScrollPaging } from "../hooks/useScrollPaging";
import styles from "../scss/sections/portfolio.module.scss";
import Icon from "../utilities/elements/Icon";

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
                    <h3>{ projects[highlightedIndex].title }</h3>
                    <p>{ projects[highlightedIndex].description }</p>
                </span>

                <div className={ styles.pagination }>
                {
                    projects[highlightedIndex].technologies.map((tech, index) => 
                        <Icon key={ index }><svg></svg></Icon>
                    )
                }
                </div>

            </div>


            <div className={ styles.scrollview }>
            <div className={ styles.viewport }>
                <div className={ styles.content }>
                {
                    projects.map((project, index) => 
                        <Webview index={ index } focusIndex={ highlightedIndex } key={ index } project={ project } />
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


