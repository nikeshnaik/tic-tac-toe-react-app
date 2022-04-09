import styles from "./style.module.css"
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import Modal from "../../HOC/Modal";


function ResultLayout(props) {

    if (props.render) {

        let logo_src = `icon_${props.winnerDetails.winner.toLowerCase()}`

        let logo_styleclass = `${props.winnerDetails.winner.toLowerCase()}-result-logo`

        let msg = props.winnerDetails.winner_name === "you" ? props.globalState.player1 === "Player 1" ? "Player 1 Won" : "You Won" : props.globalState.player2 === "CPU" ? "Oh No, You Lost" : "Player 2 Won"


        return (

            <Modal>

                <div className={styles.result_layout}>

                    <h4>{msg}</h4>
                    <div className={styles.logo_with_text}>
                        <Logo src={logo_src} styleClass={logo_styleclass} />
                        <span>takes the round</span>
                    </div>
                    <div className={styles.button_section}>
                        <Button button_text="QUIT" styleClass="quit" />
                        <Button button_text="NEXT ROUND" gameState={props.gameState} setState={props.setState} styleClass="next_round" />
                    </div>


                </div>
            </Modal>


        );

    }
    else {
        return (<></>)
    }
}

export default ResultLayout;