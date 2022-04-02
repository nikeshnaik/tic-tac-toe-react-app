import styles from './style.module.css'

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

    return (
        <img src={props.src} alt={props.alt} className={styles_mapping[props.styleClass]} />
    );
}

export default Logo;
