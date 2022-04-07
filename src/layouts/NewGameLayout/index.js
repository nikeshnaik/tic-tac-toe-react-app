import styles from './style.module.css'
import Container from '../../HOC/NewGameContainer';
import Logo from "../../components/Logo"
import Button from '../../components/Button';



function NewGameLayout(props) {

    return (
        <Container width="46rem" height="47.1rem">
            <div className="logo">
                <Logo src="logo" alt="logo" styleClass="logo" />
            </div>
            <div className={styles.select_player}>
                <h4>PICK PLAYER 1'S MARK</h4>
                <div className={styles.logo_container}>
                    <div className={styles.x_logo_highlight} tabIndex="0">
                        <Logo src="icon_x" alt="x" styleClass="x-logo" />
                    </div>
                    <div className={styles.o_logo_highlight} tabIndex="1">
                        <Logo src="icon_o" alt="o" styleClass="o-logo" />
                    </div>
                </div>
                <h6>REMEMBER : X GOES FIRST</h6>
            </div>

            <div className={styles.new_game_buttons}>
                <Button button_text="New Game (Vs CPU)" styleClass="new_game-vs-cpu" />
                <Button button_text="New Game (Vs PLAYER)" styleClass="new_game-vs-player" />
            </div>

        </Container >

    );
}

export default NewGameLayout;
