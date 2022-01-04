import timeout from "../timeout";
import swap from "../swap";

const insertionSort = async (array: any[], delay: number) => {
    for (let i = 1; i < array.length; i++) {
        let j = i;
        while (j > 0 && parseInt(array[j - 1].style.height.slice(0, -2)) > parseInt(array[j].style.height.slice(0, -2))) {
            await timeout(delay);
            array[j - 1].style.backgroundColor = '#d79921';
            array[j].style.backgroundColor = '#d79921';
            await timeout(delay);
            swap(array, j - 1, j);
            await timeout(delay);
            array[j - 1].style.backgroundColor = '#383532';
            array[j].style.backgroundColor = '#383532';
            j--;
        }
    }
    return array;
}

export default insertionSort;