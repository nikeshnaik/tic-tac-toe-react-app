import Container from "../../HOC/NewGameContainer";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import Board from "../Board";
import ScoreBox from "../../components/Score";
import styles from "./style.module.css"


function GameLayout(props) {



    function getCurrentPlayer() {
        return props.gameState.currentPlayer.toLowerCase()
    }



    return (
        <Container width="46rem" height="62.3rem">

            <div className={styles.header}>
                <Logo src="logo" alt="logo" styleClass="logo"></Logo>
                <Button styleClass="change_turn">
                    <div className={`${getCurrentPlayer()}-logo-change-turn`}>
                        <Logo src={`icon_${getCurrentPlayer()}`} alt="icon" styleClass={`${getCurrentPlayer()}-logo-change_turn`}></Logo>
                    </div>
                    <span>TURN</span>
                </Button>
                <Button styleClass="restart" gameState={props.gameState} setGameState={props.setState}>
                    <Logo src="icon_restart" alt="restart" styleClass="restart-icon"></Logo>
                </Button>
            </div >

            <Board width="46rem" height="46.1rem" gameState={props.gameState} setGameState={props.setState} />


            <div className={styles.stats_footer}>
                <Button styleClass="currentPlayer">
                    <ScoreBox player="current" player_name="X(YOU)" player_mark="x" score="0" />
                </Button>
                <Button styleClass="ties_wrapper">
                    <ScoreBox player="ties" player_name="TIES" player_mark="ties" score="0" />
                </Button>
                <Button styleClass="opponentPlayer">
                    <ScoreBox player="opponent" player_name="O(CPU)" player_mark="O" score="0" />
                </Button>
            </div>



        </Container >
    )
}


export default GameLayout;