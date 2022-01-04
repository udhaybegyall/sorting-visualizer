interface props {
    height: number,
}

/**
 * 
 * @param props height of the bar
 * @returns Div with class bar with height of props.height
 */
const Bar = (props: props) => {
    return <div className="bar" style={{ height: props.height }} />
}

export default Bar;