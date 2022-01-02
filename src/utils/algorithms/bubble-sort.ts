import timeout from "../timeout";
import swap from "../swap";

const bubbleSort = async (array: any[], delay: number) => {
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (parseInt(array[i].style.height.slice(0, -2)) > parseInt(array[i + 1].style.height.slice(0, -2))) {

                await timeout(delay);
                array[i].style.backgroundColor = 'yellow';
                array[i + 1].style.backgroundColor = 'yellow';

                await timeout(delay);
                swap(array, i, i + 1);
                swapped = true;

                await timeout(delay);
                array[i].style.backgroundColor = '#323234';
                array[i + 1].style.backgroundColor = '#323234';
            }
        }
    }
    return array;
}

export default bubbleSort;