import add from '../main-component/images/add.svg'
import styles from './styles.module.css'

export const ButtonAddValue = () => {

    return (
        <button className = {styles.buttonAddValue}>
            <img src = {add} alt = 'add_value'/>
        </button>
    )
}