import Logo from "../Logo";
// import styles from "./style.module.css"

function GridElement(props) {


    return (
        <>
            <Logo src={`./assets/icon-${props.icon}.svg`} alt="logo" />

        </>);
}

export default GridElement;