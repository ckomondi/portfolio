
import { useCallback, useState } from "react";
import styles from "../styles/Tabbar.module.module.scss"


interface ITabbarProperties {
    items: string[]; 
}

function Tabbar(props: ITabbarProperties) {

    // const items = ["first", "second", "third"]
    const [focus, setFocus] = useState(0); 

    const { items } = props; 

    const className = (index: number) => {
        return (index === focus) ? styles.focus : ""; 
    }

    return (
        <div className={ styles.tabbar }>
        {
            items.map((item, index) => 
                <p className={ className(index) } key={ index } onClick={() => {
                    if (focus === index) { return; }
                    setFocus(() => index); 
                }}>{ item }</p>
            )
        }
        </div>
    )
}


export default Tabbar; 


