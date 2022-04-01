import styles from './style.module.css'


function GridLayout(props) {

    let dimensions = {
        "width": props.width,
        "height": props.height
    }

    return (

        <div className={styles.gridParent} style={dimensions}>
            <div className={styles.gridChild1}> </div>
            <div className={styles.gridChild2}> </div>
            <div className={styles.gridChild3}> </div>
            <div className={styles.gridChild4}> </div>
            <div className={styles.gridChild5}> </div>
            <div className={styles.gridChild6}> </div>
            <div className={styles.gridChild7}> </div>
            <div className={styles.gridChild8}> </div>
            <div className={styles.gridChild9}> </div>
        </div>

    );
}

export default GridLayout;