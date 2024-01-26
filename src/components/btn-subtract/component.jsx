import subtract from '../main-component/images/subtract.svg'
import styles from './styles.module.css'

export const ButtonSubtractValue = () => {

    return (
        <button className = {styles.buttonSubtractValue}>
            <img src = {subtract} alt = 'subtract_value'/>
        </button>
    )
}