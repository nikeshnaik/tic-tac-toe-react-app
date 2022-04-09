import styles from './style.module.css'
import Container from '../../HOC/NewGameContainer';
import Logo from "../../components/Logo"
import Button from '../../components/Button';



function NewGameLayout(props) {

    function handlePlayerSelect(event) {

        console.log(event.currentTarget)

        if (event.currentTarget.dataset.mark === "X") {

            props.globalState.player1 = "you"
            props.globalState.player1_mark = "X"

            props.globalState.player2 = "CPU"
            props.globalState.player2_mark = "O"


        }
        else if (event.currentTarget.dataset.mark === "O") {

            console.log("O was clicked")

            props.globalState.player1 = "you"
            props.globalState.player1_mark = "O"

            props.globalState.player2 = "CPU"
            props.globalState.player2_mark = "X"



        }

        props.setGlobalState({ ...props.globalState })


    }

    if (props.render) {

        return (
            <Container width="46rem" height="47.1rem">
                <div className="logo">
                    <Logo src="logo" alt="logo" styleClass="logo" />
                </div>
                <div className={styles.select_player}>
                    <h4>PICK PLAYER 1'S MARK</h4>
                    <div className={styles.logo_container}>
                        <div className={styles.x_logo_highlight} tabIndex="0" data-mark="X" onClick={handlePlayerSelect}>
                            <Logo src="icon_x" alt="x" styleClass="x-logo" />
                        </div>
                        <div className={styles.o_logo_highlight} tabIndex="1" data-mark="O" onClick={handlePlayerSelect}>
                            <Logo src="icon_o" alt="o" styleClass="o-logo" />
                        </div>
                    </div>
                    <h6>REMEMBER : X GOES FIRST</h6>
                </div>

                <div className={styles.new_game_buttons}>
                    <Button globalState={props.globalState} setGlobalState={props.setGlobalState} button_text="New Game (Vs CPU)" styleClass="new_game-vs-cpu" />
                    <Button globalState={props.globalState} setGlobalState={props.setGlobalState} button_text="New Game (Vs PLAYER)" styleClass="new_game-vs-player" />
                </div>

            </Container >

        );
    }
    else {
        return (<></>)
    }
}

export default NewGameLayout;
