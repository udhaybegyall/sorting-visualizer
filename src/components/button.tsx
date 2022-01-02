const styles = {
    button: {
        cursor: 'pointer',
        backgroundColor: '#7DD8FF',
        marginTop: '20px',
        height: '35px',
        width: '140px',
        color: '#1d1f20',
        fontSize: '14px',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '10px',
        boxShadow: 'none',
        '&:hover': {
            border: 'none',
        },
        '&:focus': {
            border: 'none',
        },
    },
};

const button = (props: any) => {
    return <button style={styles.button} onClick={props.onClick}> {props.name} </button>
}

export default button
