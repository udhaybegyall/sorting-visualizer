import { GlobalState } from "../store/GlobalState";
import { useContext } from "react";

const Button = (props: any) => {

    const { issorting } = useContext(GlobalState);

    const styles = {
        button: {
            cursor: 'pointer',
            backgroundColor: props.bgColor,
            marginTop: '20px',
            height: '35px',
            width: '135px',
            color: props.color,
            fontSize: '14px',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '10px',
            boxShadow: 'none',
        },
    };

    return <button disabled={issorting} id='button' style={styles.button} onClick={props.onClick}> {props.name} </button>
}

export default Button
