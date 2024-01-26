import viber_logo from '../main-component/images/links_logo/viber_logo.svg'
import telegram_logo from '../main-component/images/links_logo/telegram_logo.svg'
import whats_up__logo from '../main-component/images/links_logo/whats_up__logo.svg'
import youtube_logo from '../main-component/images/links_logo/youtube_logo.svg'
import vk_logo from '../main-component/images/links_logo/vk_logo.svg'
import more_than_two__logo from '../main-component/images/links_logo/more_than_two__logo.svg'
import styles from './styles.module.css'

export const SocialMediaLinks = () => {
    return (
        <div className={styles.footerLinks}>
                <img src = {viber_logo} alt = 'viber__logo' className={styles.linkLogo}/>
                <img src = {telegram_logo} alt = 'telegram__logo' className={styles.linkLogo}/>
                <img src = {whats_up__logo} alt = 'whats-up__logo' className={styles.linkLogo}/>
                <img src = {youtube_logo} alt = 'youtube__logo' className={styles.linkLogo}/>
                <img src = {vk_logo} alt = 'vk__logo' className={styles.linkLogo}/>
                <img src = {more_than_two__logo} alt = 'more-than-two__logo' className={styles.linkLogoMoreTwo}/>
        </div>
    )
}