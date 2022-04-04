import Logo from "../Logo";
// import styles from "./style.module.css"

function GridElement(props) {

    let logo_name = props.hover ? `icon_${props.icon}_outline` : `icon_${props.icon}`
    let logo_class = props.icon === "x" ? "x-logo-grid" : "o-logo-grid"

    return (
        <>
            <Logo src={logo_name} alt="logo" styleClass={logo_class} />
        </>);
}

export default GridElement;