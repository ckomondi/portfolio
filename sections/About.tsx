



import styles from "../scss/sections/about.module.scss";

const About = () => {
    return (
        <section id={ styles.about }>
            <div className={ styles.body }>
                <p><span>l</span>orem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quae labore eum quidem aspernatur officia pariatur eius optio obcaecati commodi vitae, dicta culpa harum dolore placeat id neque adipisci itaque laudantium ratione.</p>
            </div>


            <div className={ styles.vignette }>
                <img src="/vignette.png" alt=""></img>
            </div>

        </section>
    )
}


export default About; 


