import styles from './styles.module.css'
import { useState } from 'react'
import classNames from 'classnames'

export const CheckboxFix = () => {

    const [newStatus, setNewStatus] = useState(false)

    const setStatus = () => {
        setNewStatus(!newStatus)
    }

    return (
        <div className={styles.scalesContainer}>
            <input type="checkbox" id="scales" name="checkbox"
            checked={newStatus}
            onChange={setStatus}/>
            <label htmlFor="scales" className = {classNames(styles.scales, {
                [styles.hiddenLabel] : newStatus === true,
            })}>зафиксировать</label>
            {newStatus ? <label className = {styles.newStatusCheckbox}>зафиксировано</label> : null}
        </div>
    )
}