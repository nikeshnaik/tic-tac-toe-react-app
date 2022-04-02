import styles from './style.module.css'
import GridElement from '../../components/GridElement';


function GridLayout(props) {

    let dimensions = {
        "width": props.width,
        "height": props.height
    }

    return (

        <div className={styles.gridParent} style={dimensions}>
            <div className={styles.gridChild1}> <GridElement icon="x" hover={true} /> </div>

            <div className={styles.gridChild2}> <GridElement icon="o" /> </div>
            <div className={styles.gridChild3}> </div>
            <div className={styles.gridChild4}><GridElement icon="o" hover={true} />  </div>
            <div className={styles.gridChild5}> </div>
            <div className={styles.gridChild6}> </div>
            <div className={styles.gridChild7}> <GridElement icon="x" /> </div>
            <div className={styles.gridChild8}> </div>
            <div className={styles.gridChild9}> <GridElement icon="o" /> </div>
        </div>

    );
}

export default GridLayout;