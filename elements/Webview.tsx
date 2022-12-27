

import { Project } from "../models/project";
import styles from "../scss/sections/webview.module.scss";

interface WebviewProperties {
    project: Project; 
    isHighlighted: boolean;
}

const Webview = (props: WebviewProperties) => {

    const { project, isHighlighted } = props; 


    return (
        <div className={ styles.webview }>
            <div className={ styles.tabbar }>
                <div><span></span><span></span><span></span></div>

                <p>{ project.link }</p>

                <span></span>
            </div>

            <div className={ styles.content }>
                <img className={ isHighlighted ? "highlighted" : undefined } src="/wavyfy.png" alt=""></img>
            </div>
        </div>
    )
}

export default Webview; 
