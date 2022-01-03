const button = (props: any) => {

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

    return <button id='button' style={styles.button} onClick={props.onClick}> {props.name} </button>
}

export default button
