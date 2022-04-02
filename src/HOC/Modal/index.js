import styles from "./style.module.css"

function Modal(props) {

    return (

        <div className={styles.modal_container}>
            <div className={styles.modal_main}>

                {props.children}
            </div>
        </div >
    );
}

export default Modal;