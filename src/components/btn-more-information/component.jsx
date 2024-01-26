import styles from './styles.module.css'

export const ButtonGetMoreInformation = () => {
    
    return (
        <div className={styles.btnContainer}>
            <button className={styles.btn}>
                <a href = '/' className={styles.btnText}>ПОДРОБНЕЕ</a>
            </button>
        </div>
    )
}