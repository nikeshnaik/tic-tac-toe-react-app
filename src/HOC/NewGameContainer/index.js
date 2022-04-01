import styles from './style.module.css'

function Container(props) {

    let dimensions = {
        "width": props.width,
        "height": props.height
    }

    console.log(dimensions)

    return (
        <div className={styles.NewGameContainer} style={dimensions}>{props.children}</div>
    );
}

export default Container;
