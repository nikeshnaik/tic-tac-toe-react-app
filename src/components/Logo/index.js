import styles from './style.module.css'

function Logo(props) {

    let styles_mapping = {
        "logo": styles.logo,
        "x-logo": styles['x-logo'],
        "o-logo": styles['o-logo']
    }

    return (
        <img src={props.src} alt={props.alt} className={styles_mapping[props.styleClass]} />
    );
}

export default Logo;
