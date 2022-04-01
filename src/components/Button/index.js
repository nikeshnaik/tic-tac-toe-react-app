import styles from './style.module.css'

function Button(props) {

    let stylesMapping = {
        "new_game-vs-cpu": styles["btn__new_game-vs-cpu"],
        "new_game-vs-player": styles["btn__new_game-vs-player"],
        "change_turn": styles["btn__change_turn"],
        "restart": styles["btn__restart"],
        "currentPlayer": styles["btn__currentPlayer"],
        "ties_wrapper": styles["btn__ties_wrapper"],
        "opponentPlayer": styles["btn__opponentPlayer"]
    }

    return (
        <div className={`${styles.btn} ${stylesMapping[props.styleClass]} `}>
            {props.children}
            <a href="#newgame" className={styles.btn__anchor}> {props.button_text}</a>
        </div >
    );
}

export default Button;
