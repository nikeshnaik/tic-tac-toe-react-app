import styles from './style.module.css'
import Button from '../components/Button';
import Logo from '../components/Logo';
import Container from '../HOC/NewGameContainer';



function NewGameLayout(props) {


    return (
        <Container>
            <Logo src="./assets/logo.svg" alt="logo" styleClass="logo" />
            <div className={styles.select_player}>
                <h4>PICK PLAYER 1'S MARK</h4>
                <div className={styles.logo_container}>
                    <div className={styles.x_logo_highlight}>
                        <Logo src="./assets/icon-x.svg" alt="x" styleClass="x-logo" />
                    </div>
                    <div className={styles.o_logo_highlight}>
                        <Logo src="./assets/icon-o.svg" alt="o" styleClass="o-logo" />
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
