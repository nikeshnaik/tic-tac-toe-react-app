import styles from "./style.module.css"
import Container from "../../HOC/NewGameContainer";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import Modal from "../../HOC/Modal";


function ResultLayout(props) {
    return (

        <Modal>

            <div className={styles.result_layout}>

                <h4>oh, no you lost</h4>
                <div className={styles.logo_with_text}>
                    <Logo src="./assets/icon-o.svg" />
                    <span>takes the round</span>
                </div>
                <div className={styles.button_section}>
                    <Button button_text="QUIT" styleClass="quit" />
                    <Button button_text="NEXT ROUND" styleClass="next_round" />
                </div>


            </div>
        </Modal>


    );

}

export default ResultLayout;