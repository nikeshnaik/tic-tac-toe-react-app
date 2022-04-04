import styles from './style.module.css'
import { ReactComponent as Icon_o } from '../../assets/icon-o.svg'
import { ReactComponent as Icon_x } from '../../assets/icon-x.svg'
import { ReactComponent as Logo_icon } from '../../assets/logo.svg'
import { ReactComponent as Restart_icon } from '../../assets/icon-restart.svg'
import { ReactComponent as Icons_o_outline } from '../../assets/icon-o-outline.svg'
import { ReactComponent as Icons_x_outline } from '../../assets/icon-x-outline.svg'

function Logo(props) {

    let styles_mapping = {
        "logo": styles.logo,
        "x-logo": styles['x-logo'],
        "o-logo": styles['o-logo'],
        "x-logo-change_turn": styles["x-logo-change_turn"],
        "o-logo-change_turn": styles["o-logo-change_turn"],
        "restart-icon": styles["restart-icon"],
        "o-logo-grid": styles["o-logo-grid"],
        "x-logo-grid": styles["x-logo-grid"]
    }

    let icon_mapping = {
        "logo": <Logo_icon alt="logo" className={styles_mapping[props.styleClass]} width="100%" height="100%" viewBox='0 0 72 32' />,
        "icon_o": <Icon_o alt="logo" className={styles_mapping[props.styleClass]} width="100%" height="100%" viewBox='0 0 64 64' />,
        "icon_x": <Icon_x alt="logo" className={styles_mapping[props.styleClass]} width="100%" height="100%" viewBox='0 0 64 64' />,
        "icon_o_outline": <Icons_o_outline alt="logo" className={styles_mapping[props.styleClass]} width="100%" height="100%" viewBox='0 0 68 68' />,
        "icon_x_outline": <Icons_x_outline alt="logo" className={styles_mapping[props.styleClass]} width="100%" height="100%" viewBox='0 0 64 64' />,
        "icon_restart": <Restart_icon alt="logo" className={styles_mapping[props.styleClass]} width="100%" height="100%" viewBox='0 0 20 20' />

    }

    return (
        <div className={styles_mapping[props.styleClass]}>
            {icon_mapping[props.src]}
        </div>
    );
}

export default Logo;
