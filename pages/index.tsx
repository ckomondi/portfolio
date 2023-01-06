

import styles from "../scss/app/index.module.scss";
import BrowserCard from "../cards/browser";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Intro from "../sections/Intro";
import Portfolio from "../sections/Portfolio";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax"
import { MutableRefObject, UIEventHandler, useEffect, useRef, useState } from "react";
import Technologies from "../sections/Technologies";
import Navbar from "../elements/navbar";


function Index() {

    const [scrollPosition, setScrollPosition] = useState(0); 

    const handleScroll = (event: any) => {
        
        const container = (event.target as HTMLDivElement);
        setScrollPosition(() => container.scrollTop); 
    }

    return (
    <>
        <Navbar />

        <main id={ styles.main }>
        <Parallax  onScrollCapture={ handleScroll } pages={ 8 }>
            <ParallaxLayer offset={ 0 }><Intro /></ParallaxLayer>
            <ParallaxLayer offset={ 1 }><About /></ParallaxLayer>
            <ParallaxLayer offset={ 2 } sticky={{ start: 2, end: 3 }}><Portfolio position={ scrollPosition } /></ParallaxLayer>
            <ParallaxLayer offset={ 4 } sticky={{ start: 4, end: 6 }}><Technologies position={ scrollPosition } /></ParallaxLayer>
            <ParallaxLayer offset={ 7 }><Contact /></ParallaxLayer>
        </Parallax>
        </main>


    </>
    )

}

export default Index; 


