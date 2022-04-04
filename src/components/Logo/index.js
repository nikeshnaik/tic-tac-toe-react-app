import styles from './style.module.css'
import { ReactComponent as IconO } from '../../assets/icon-o.svg'
import { ReactComponent as IconX } from '../../assets/icon-x.svg'
import { ReactComponent as LogoIcon } from '../../assets/logo.svg'
import { ReactComponent as RestartIcon } from '../../assets/icon-restart.svg'
import { ReactComponent as IconsOOutline } from '../../assets/icon-o-outline.svg'
import { ReactComponent as IconsXOutline } from '../../assets/icon-x-outline.svg'

function Logo(props) {

    let styles_mapping = {
        "logo": styles.logo,
        "x-logo": styles['x-logo'],
        "o-logo": styles['o-logo'],
        "x-logo-change_turn": styles["x-logo-change_turn"],
        "o-logo-change_turn": styles["o-logo-change_turn"],
        "restart-icon": styles["restart-icon"],
        "o-logo-grid": styles["o-logo-grid"],
        "x-logo-grid": styles["x-logo-grid"],
        "o-result-logo": styles["o-result-logo"],
        "x-result-logo": styles["x-result-logo"]
    }

    let icon_mapping = {
        "logo": <LogoIcon alt="logo" className={styles_mapping[props.styleClass]} width="100%" height="100%" viewBox='0 0 72 32' />,
        "icon_o": <IconO alt="icon-0" className={styles_mapping[props.styleClass]} width="100%" height="100%" viewBox='0 0 64 64' />,
        "icon_x": <IconX alt="icon-x" className={styles_mapping[props.styleClass]} width="100%" height="100%" viewBox='0 0 64 64' />,
        "icon_o_outline": <IconsOOutline alt="icon-o-outline" className={styles_mapping[props.styleClass]} width="100%" height="100%" viewBox='0 0 68 68' />,
        "icon_x_outline": <IconsXOutline alt="icon-x-outline" className={styles_mapping[props.styleClass]} width="100%" height="100%" viewBox='0 0 64 64' />,
        "icon_restart": <RestartIcon alt="logo" className={styles_mapping[props.styleClass]} width="100%" height="100%" viewBox='0 0 20 20' />
    }

    return (
        <div className={styles_mapping[props.styleClass]}>
            {icon_mapping[props.src]}
        </div>
    );
}

export default Logo;
