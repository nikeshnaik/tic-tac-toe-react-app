import styles from './style.module.css'

function Button(props) {

    let stylesMapping = {
        "new_game-vs-cpu": styles["btn__new_game-vs-cpu"],
        "new_game-vs-player": styles["btn__new_game-vs-player"]
    }

    return (
        <div className={`${styles.btn} ${stylesMapping[props.styleClass]} `}>
            <a className={styles.btn__anchor}> {props.button_text}</a>
        </div >
    );
}

export default Button;
