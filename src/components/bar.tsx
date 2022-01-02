import { useContext } from 'react';
import { GlobalState } from '../store/GlobalState';

interface props {
    height: number,
    value: string
}

/**
 * 
 * @param props height of the bar
 * @returns Div with class bar with height of props.height
 */
const Bar = (props: props) => {

    const { sliderValue } = useContext(GlobalState);

    /**
     * @description makes the p tag vsible if the slider value is <= 35.
     *
     *   const barValue = window.innerWidth <= 768 ? <p id="bar-value">{props.value}</p> : null;
     *   console.log(window.innerWidth);
     */

    /**
     * 
     * @returns p tag with class bar-value with height of bar.
     */
    const showP = () => {
        if (sliderValue! <= 15 && window.innerWidth < 768) {
            return <p id="bar-value">{props.value}</p>
        } else {
            return null;
        }
    }

    return (
        <div className="bar" style={{ height: props.height }}>
            {showP()}
        </div>
    );
}

export default Bar;