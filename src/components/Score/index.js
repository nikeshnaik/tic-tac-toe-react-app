import styles from "./style.module.css"


function ScoreBox(props) {

    return (
        <>
            <p className={styles.player} id={props.player}>{props.player_name}</p>
            <p className={styles.score} id={props.player_mark}>{props.score}</p>
        </>
    )
}


export default ScoreBox