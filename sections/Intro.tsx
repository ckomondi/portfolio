


import styles from "../scss/sections/intro.module.scss";
    

const Intro = () => {
    return (
        <section id={ styles.intro }>

            <div id={ styles.showcase }>
                <img src="/centra.png" alt=""></img>
            </div>

            <div className={ styles.widgets }>
                <div className={ styles.widget && styles.why }>
                    <h5>Lorem ipsum dolor sit.</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
            
                <div></div>
            
                <div className={ `${ styles.widget } ${ styles.how }` }>
                    <h5>Lorem ipsum dolor sit.</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
            </div>

            <div className={ styles.titles }>
                <h1>web</h1>
                <h1>Dev<span>.</span></h1>
            </div>
        </section>
    )
}

export default Intro; 


