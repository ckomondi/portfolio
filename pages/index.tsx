

import styles from "../scss/pages/index.module.scss"
import BrowserCard from "../cards/browser";


function Index() {

    return (
    <main className={ styles.main }>
        <BrowserCard
            favicon={ <></> }
            title={ <p>Wavyfy &middot; Spotify Clone</p> }
        />
    </main>
       
    )

}

export default Index; 


