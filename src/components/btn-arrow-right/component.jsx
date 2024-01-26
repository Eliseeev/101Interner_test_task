import arrow_right from '../main-component/images/arrow_right.svg';
import styles from './styles.module.css'

export const ButtonClickRight = () => {

    return (
        <button className= {styles.buttonClickRight}>
            <img src = {arrow_right} alt = 'arrow_right'/>
        </button>
    )
}