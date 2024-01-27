import styles from './styles.module.css'
import provider_logo from './images/provider_logo.svg'
import gigabytes from './images/gigabytes.svg'
import minutes from './images/minutes.svg'
import rub_minutes from './images/rub_minutes.svg'
import { ButtonClickLeft } from '../btn-arrow-left/component'
import { ButtonClickRight } from '../btn-arrow-right/component'
import { ButtonGetMoreInformation } from '../btn-more-information/component'
import { SocialMediaLinks } from '../links-social-media/component'
import { AuxiliaryTextUser } from '../auxiliary_text_user/component'
import { CheckboxFix } from '../checkbox_fix/component'
import { ButtonAddValue } from '../btn-add/component'
import { ButtonSubtractValue } from '../btn-subtract/component'


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
                            <ButtonAddValue/>
                            <img src = {gigabytes} alt = 'gigabytes'/>
                            <ButtonSubtractValue/>
                            <CheckboxFix/>
                        </div>

                        <div className={styles.parameterMinutes}>
                            <ButtonAddValue/>
                            <img src = {minutes} alt = 'minutes'/>
                            <ButtonSubtractValue/>
                            <CheckboxFix/>
                        </div>

                        <div className={styles.parameterRubMinutes}>
                            <ButtonAddValue/>
                            <img src = {rub_minutes} alt = 'rub_minutes'/>
                            <ButtonSubtractValue/>
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