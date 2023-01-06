



import styles from "../scss/sections/contact.module.scss";
import Social from "../elements/Social";


const Contact = () => {
    return (
        <section id={ styles.contact }>

            <div className={ styles.psa }>
                <p>Let's make something beautiful</p>
            </div>

            <div className={ styles.links }>
                <Social title={ "Email" } />
                <Social title={ "Github" } />
                <Social title={ "Discord" } />
                <Social title={ "Slack" } />
            </div>
        </section>
    )
}

export default Contact; 

