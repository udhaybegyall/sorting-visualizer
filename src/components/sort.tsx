import Button from './button';
import React, { useContext } from "react";
import { GlobalState } from "../store/GlobalState";

import SelectedAlgorithm from '../utils/select-algo';

const Sort = () => {

    const { algo, delay, setTimeTaken, setIsSorting } = useContext(GlobalState);

    let customDelay = 0;
    switch (delay) {
        case 1:
            customDelay = 1000;
            break;
        case 2:
            customDelay = 500;
            break;
        case 3:
            customDelay = 250;
            break;
        case 4:
            customDelay = 100;
            break;
        default:
            customDelay = 0;
    }

    const handleSort = async (array: any[], algorithm: String, customDelay: number) => {
        let sec = 0;
        setIsSorting?.(true);

        let timer = setInterval(() => {
            sec++;
            setTimeTaken?.(sec);
        }, 1000);


        await SelectedAlgorithm(array, algorithm, customDelay);

        setIsSorting?.(false);

        // STOP TIMER AFTER SORTING
        clearInterval(timer);
    };

    // useEffect(() => {
    //     setIsSorting?.(isSorting);
    // }, [isSorting]);


    const sortBars = () => {
        const bars = document.getElementsByClassName('bar');
        const barsArray = Array.from(bars);
        const barsArrayCopy = [...barsArray];
        handleSort(barsArrayCopy, algo, customDelay);
    }

    return (
        <React.Fragment>
            <div className="buttons">
                <Button name="Sort" onClick={sortBars} bgColor='#d79921' color='#ebdbb2' />
                <Button name="Generate" onClick={() => console.log("Generate")} bgColor='#d79a213b' color='#d79921' />
            </div>
        </React.Fragment>
    )
}

export default Sort;