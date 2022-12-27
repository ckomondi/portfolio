



import styles from "../scss/sections/contact.module.scss";
import Social from "../elements/Social";


const Contact = () => {
    return (
        <section id={ styles.contact }>

            <div className={ styles.psa }>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            <div className={ styles.links }>
                <Social />
                <Social />
                <Social />
                <Social />
            </div>
        </section>
    )
}

export default Contact; 

