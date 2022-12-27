

import styles from "../scss/app/index.module.scss";
import BrowserCard from "../cards/browser";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Intro from "../sections/Intro";
import Portfolio from "../sections/Portfolio";
import Process from "../sections/Process";
import { Parallax, ParallaxLayer } from "@react-spring/parallax"


function Index() {

    return (
    <>
        <nav id={ styles.navbar }>
            <div id={ styles.logo }>
                <svg viewBox="0 0 291 291" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M70.3332 51.7334C63.7999 53.8667 53.9332 64.1334 51.9332 70.8001C47.2665 86.6667 53.5332 103.333 66.7332 110.267C71.2665 112.667 75.6665 113.333 89.2665 114C108.067 115.067 112.733 116.8 117.933 124.667C120.333 128 121 130.933 121 137.2C121 151.467 125.4 160.8 134.467 165.333C139.8 168.133 150.733 167.867 156.867 164.667C164.733 160.8 167.667 154.8 169 140.533C169.933 130.667 170.733 127.733 173.667 123.867C179.267 116.533 183.667 115.067 202.333 114C224.867 112.933 231.933 109.2 238.2 95.3334C243.133 84.4001 241.4 70.2667 233.933 61.2001C222.867 47.8667 199.4 46.4001 186.6 58.4001C179.4 65.2001 178.067 69.2001 177 88.0001C175.8 108.933 174.2 113.067 165 117.6C160.067 120.133 157 120.667 145.667 120.667C134.333 120.667 131.267 120.133 126.333 117.6C117.267 113.067 115.533 108.8 114.333 88.9334C113.267 70.1334 112.333 67.0667 106.467 60.2667C98.3332 51.0667 83.5332 47.6001 70.3332 51.7334Z" fill="#0D0D0D"/>
                <path d="M199.4 177.199C186.6 180.666 177.4 191.733 176.067 205.199C174.067 224.799 191 241.999 210.6 240.266C225 238.933 236.333 229.199 239.667 215.333C245.267 191.999 222.867 170.799 199.4 177.199Z" fill="#0D0D0D"/>
                <path d="M68.3333 179.733C60.3333 183.6 56.7333 187.333 53.1333 195.333C47.5333 207.6 51.1333 224.8 60.7333 232.933C75.9333 245.733 99.2666 242.133 109.667 225.466C113.267 219.6 113.667 217.733 113.667 208.666C113.667 199.6 113.267 197.733 109.667 191.866C101 178 82.9999 172.666 68.3333 179.733Z" fill="#0D0D0D"/>
                </svg>
            </div>

            <div className={ styles.lang }>
                <p>en</p>
                <p>es</p>
                <p>sw</p>
            </div>
        </nav>
    
        {/* <main id={ styles.main }>
            <Intro />
            <About />
            <Portfolio />
            <Process />
            <Contact />
        </main> */}

        <main id={ styles.main }>
        <Parallax pages={ 5 }>
            <ParallaxLayer offset={ 0 }><Intro /></ParallaxLayer>
            <ParallaxLayer offset={ 1 }><About /></ParallaxLayer>
            <ParallaxLayer offset={ 2 }><Portfolio /></ParallaxLayer>
            <ParallaxLayer offset={ 3 }><Process /></ParallaxLayer>
            <ParallaxLayer offset={ 4 }><Contact /></ParallaxLayer>
        </Parallax>
        </main>


    </>
    )

}

export default Index; 


