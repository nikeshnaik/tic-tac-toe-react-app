import styles from './style.module.css'
import initGameState from '../../Game/init_state';

function Button(props) {

    let stylesMapping = {
        "new_game-vs-cpu": styles["btn__new_game-vs-cpu"],
        "new_game-vs-player": styles["btn__new_game-vs-player"],
        "change_turn": styles["btn__change_turn"],
        "restart": styles["btn__restart"],
        "Player1": styles["btn__Player1"],
        "ties_wrapper": styles["btn__ties_wrapper"],
        "Player2": styles["btn__Player2"],
        "quit": styles["btn__quit"],
        "next_round": styles["btn__next_round"]
    }

    function handleMouseClickGeneric(event) {

        console.log(event.currentTarget, event.target, stylesMapping[props.styleClass])

        if (event.currentTarget.className.includes("restart")) {

            let newGameState = initGameState(props.gameState.player1, props.gameState.player2)

            // Store old game state somehwere

            props.setGameState({ ...newGameState })

        }

        if (event.currentTarget.className.includes("new_game-vs-cpu")) {
            props.globalState.new_game = false
            props.globalState.player1 = "you"
            props.globalState.player2 = "CPU"
            props.setGlobalState({ ...props.globalState })
        }

        if (event.currentTarget.className.includes("new_game-vs-player")) {
            props.globalState.new_game = false
            props.globalState.player1 = "Player 1"
            props.globalState.player2 = "Player 2"
            props.setGlobalState({ ...props.globalState })
        }



    }




    return (
        <div className={`${styles.btn} ${stylesMapping[props.styleClass]}`} onClick={handleMouseClickGeneric}>
            {props.children}
            <a href="#newgame" className={styles.btn__anchor}> {props.button_text}</a>
        </div >
    );
}

export default Button;
