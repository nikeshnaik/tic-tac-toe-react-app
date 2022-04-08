import styles from "./style.module.css"


function ScoreBox(props) {

    return (
        <>
            <p className={styles.player}>{props.player_name}</p>
            <p className={styles.score}>{props.score}</p>
        </>
    )
}


export default ScoreBox