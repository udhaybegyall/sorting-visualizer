import { useState, useEffect, useContext } from 'react';
import { GlobalState } from '../store/GlobalState';

import Bar from './bar';
import RandomNumberGenerator from '../utils/random-array-generator';

import '../../src/App.css';

const BarsGenerator = () => {

    const { sliderValue } = useContext(GlobalState); // get slider value from global state
    const [bars, setBars] = useState<number[]>([]);

    /**
     * @description Generate random array of bars
     */
    useEffect(() => {
        const randomArray = RandomNumberGenerator(sliderValue!, 10, 200);
        setBars(randomArray);
    }, [sliderValue]);


    /**
     * @returns Bar component with random height maped to it by bars array.
     */
    const barsList = bars.map((bar, index) => {
        return <Bar key={index} height={bar} value={`${bar}`} />
    });

    return (
        <div className="bars-container">
            {barsList}
        </div>
    );
}

export default BarsGenerator;

