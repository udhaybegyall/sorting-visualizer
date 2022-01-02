import Button from './button';
import React, { useContext } from "react";
import { GlobalState } from "../store/GlobalState";

import SelectedAlgorithm from '../utils/select-algo';

const Sort = () => {

    const { algo, delay } = useContext(GlobalState);

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

    // make a timer that counts until the bars are sorted
    const [timer, setTimer] = React.useState(0);
    const [isSorting, setIsSorting] = React.useState(false);

    const handleSort = async (array: any[], algorithm: String, customDelay: number) => {
        let sec = 0;
        setIsSorting(true);

        let timer = setInterval(() => {
            sec++;
            setTimer(sec);
        }, 1000);

        await SelectedAlgorithm(array, algorithm, customDelay);

        setIsSorting(false);

        // STOP TIMER AFTER SORTING
        clearInterval(timer);
    };

    console.log(isSorting);

    // sort bars in Bars component with bubble sort
    const sortBars = () => {
        const bars = document.getElementsByClassName('bar');
        const barsArray = Array.from(bars);
        const barsArrayCopy = [...barsArray];
        // SelectedAlgorithm(barsArrayCopy, algo, customDelay);
        handleSort(barsArrayCopy, algo, customDelay);
    }

    return (
        <React.Fragment>
            <div className="buttons">
                <Button name="Sort" onClick={sortBars} />
                <Button name="Generate" onClick={() => console.log("Generate")} />
                <p>{timer}</p>
            </div>
        </React.Fragment>
    )
}

export default Sort;