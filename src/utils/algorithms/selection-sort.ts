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
            swap(array, i, min);
            await timeout(delay);
        }
    }
}

export default selectionSort;