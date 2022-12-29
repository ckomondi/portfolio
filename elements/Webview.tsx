

import { CSSProperties } from "react";
import { Project } from "../models/project";
import styles from "../scss/sections/webview.module.scss";
import { remToPixels } from "../utilities/functions/viewport";

interface WebviewProperties {
    index: number; 
    focusIndex: number; 

    project: Project;
}

const Webview = (props: WebviewProperties) => {

    const { index, focusIndex, project } = props; 

    const style : CSSProperties = {
        transform: (index < focusIndex) ?
            `matrix(0.9, 0, 0, 0.9, -${ remToPixels(24) * index }, 0)` :
            `matrix(1, 0, 0, 1, -${ remToPixels(24) * focusIndex }, 0)`,

        zIndex: (1 * index) + 1
    }

    return (
        <div className={ `${ styles.webview } ${ index < focusIndex ? styles.isHidden : undefined }` } style={ style }>
            <div className={ styles.tabbar }>
                <div><span></span><span></span><span></span></div>

                <p>{ project.link }</p>

                <span></span>
            </div>

            <div className={ styles.content }>
                <img src="/wavyfy.png" alt=""></img>
            </div>
        </div>
    )
}

export default Webview; 
