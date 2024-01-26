import styles from './styles.module.css'
import provider_logo from './images/provider_logo.svg'
import add from './images/add.svg'
import subtract from './images/subtract.svg'
import gigabytes from './images/gigabytes.svg'
import minutes from './images/minutes.svg'
import rub_minutes from './images/rub_minutes.svg'
import { ButtonClickLeft } from '../btn-arrow-left/component'
import { ButtonClickRight } from '../btn-arrow-right/component'
import { ButtonGetMoreInformation } from '../btn-more-information/component'
import { SocialMediaLinks } from '../links-social-media/component'
import { AuxiliaryTextUser } from '../auxiliary_text_user/component'
import { CheckboxFix } from '../checkbox_fix/component'


export const MainPage = () => {

    return (
        <div className={styles.mainPageContainer}>
        
            <div className = {styles.headerContainer}>
                <p className = {styles.header}>ВЫБЕРИТЕ СВОЙ ТАРИФ</p>

                 <div className = {styles.headerBorderBottom}></div>

                 <AuxiliaryTextUser/>
                 
                 <div className={styles.mainCardContainer}>

                    <p className = {styles.cardLink}>
                        Свой тариф
                    </p>

                    <div className={styles.childCardContainer}>

                            <ButtonClickLeft/>
                            <img src = {provider_logo} alt = 'logo_provider'/>
                            <ButtonClickRight/>
                            <CheckboxFix/>

                        <div className={styles.parameterGigabytes}>
                            <img src = {add} alt = 'add'/>
                            <img src = {gigabytes} alt = 'gigabytes'/>
                            <img src = {subtract} alt = 'subtract'/>
                            <CheckboxFix/>
                        </div>

                        <div className={styles.parameterMinutes}>
                            <img src = {add} alt = 'add'/>
                            <img src = {minutes} alt = 'minutes'/>
                            <img src = {subtract} alt = 'subtract'/>
                            <CheckboxFix/>
                        </div>

                        <div className={styles.parameterRubMinutes}>
                            <img src = {add} alt = 'add'/>
                            <img src = {rub_minutes} alt = 'rub_minutes'/>
                            <img src = {subtract} alt = 'subtract'/>
                            <CheckboxFix/>
                        </div>

                        <div className = {styles.footer}>

                           <p className = {styles.footerTextLinks} >Безлимит на:</p>
                           <SocialMediaLinks/>
                           <ButtonGetMoreInformation/>

                        </div>
                    </div>
                 </div>
            </div>
        </div>
    )
}