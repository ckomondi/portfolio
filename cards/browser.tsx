

import Image from "next/image";
import styles from "../scss/cards/browser.module.scss"

interface IBrowserCard {

    favicon: JSX.Element;
    title: JSX.IntrinsicElements["p"]; 

    view: string; 


}

function BrowserCard(props: IBrowserCard) {

    const { favicon, title, view } = props; 

    return (
        <div className={ styles.card }>
            <div className={ styles.header }>
                <ul className={ styles.lights }>
                <li></li>
                <li></li>
                <li></li>
                </ul>

                <div className={ styles.tab }><>
                    <div className={ styles.icon }>{ favicon }</div>
                    { title }
                </></div>
            </div>

            <div className={ styles.view }>
                <Image src="/assets/images/wavyfy.png" alt="me" layout="fill" objectFit="fill"/>
            </div>
        </div>
    )

}

export default BrowserCard; 


