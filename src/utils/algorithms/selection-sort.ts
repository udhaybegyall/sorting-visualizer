import timeout from "../timeout";
import swap from "../swap";

// create a selection sort function
const selectionSort = async (array: any[], delay: number) => {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (parseInt(array[j].style.height.slice(0, -2)) < parseInt(array[min].style.height.slice(0, -2))) {
                min = j;
            }
        }
        if (i !== min) {

            array[i].style.backgroundColor = '#d79921';
            array[min].style.backgroundColor = '#d79921';
            await timeout(delay);

            swap(array, i, min);

            array[i].style.backgroundColor = '#383532';
            array[min].style.backgroundColor = '#383532';
            await timeout(delay);
        }
    }
}

export default selectionSort;