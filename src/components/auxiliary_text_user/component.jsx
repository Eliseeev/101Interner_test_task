import styles from './styles.module.css'

export const AuxiliaryTextUser = () => {
    return (
        <div className= {styles.descriptionContainer}>

            <p className= {styles.description}>
                Используйте кнопки "<strong>&lt;/&gt;</strong>" и “<strong>+/-</strong>”, чтобы найти подходящий тариф.
                <br/>Меняйте операторов, выбирайте значения гигабайт, минут и абонплаты. 
                Используйте "<strong>зафиксировать</strong>", чтобы этот параметр не менялся.
                <br/>Жмите “<strong>Подробнее</strong>”, чтобы увидеть детали и подключить тариф
            </p>
            
     </div>
    )
}