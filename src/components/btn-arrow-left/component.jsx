import arrow_left from '../main-component/images/arrow_left.svg';
import styles from './styles.module.css'

export const ButtonClickLeft = () => {

    return (
        <button className= {styles.buttonClickLeft}>
            <img src = {arrow_left} alt = 'arrow_left'/>
        </button>
    )
}