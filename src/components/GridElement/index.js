import Logo from "../Logo";
// import styles from "./style.module.css"

function GridElement(props) {

    let logo_name = props.hover ? `icon-${props.icon}-outline.svg` : `icon-${props.icon}.svg`

    return (
        <>
            <Logo src={`./assets/${logo_name}`} alt="logo" />

        </>);
}

export default GridElement;