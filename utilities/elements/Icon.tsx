
import styles from "../styles/Icon.module.scss"


interface IIconProperties {
    isDisabled?: boolean; 
    children: JSX.Element; 
}

function Icon(props: IIconProperties) {

    const { children, isDisabled } = props; 

    return (
        <button disabled={ isDisabled } className={ styles.icon }>
            { children }
        </button>
    )
}


export default Icon; 


