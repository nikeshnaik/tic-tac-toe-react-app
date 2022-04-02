import Logo from "../Logo";
// import styles from "./style.module.css"

function GridElement(props) {

    let logo_name = props.hover ? `icon-${props.icon}-outline.svg` : `icon-${props.icon}.svg`
    let logo_class = props.icon === "x" ? "x-logo-grid" : "o-logo-grid"

    return (
        <>
            <Logo src={`./assets/${logo_name}`} alt="logo" styleClass={logo_class} />
        </>);
}

export default GridElement;