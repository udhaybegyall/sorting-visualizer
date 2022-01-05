import timeout from "../timeout";
import swap from "../swap";

const quickSort = async (array: any[], delay: number) => {
    const partition = async (array: any[], left: number, right: number) => {
        const pivot = parseInt(array[Math.floor((right + left) / 2)].style.height.slice(0, -2));
        let i = left;
        let j = right;
        while (i <= j) {
            while (parseInt(array[i].style.height.slice(0, -2)) < pivot) {
                i++;
            }
            while (parseInt(array[j].style.height.slice(0, -2)) > pivot) {
                j--;
            }
            if (i <= j) {
                await timeout(delay);
                array[i].style.backgroundColor = '#d79921';
                array[j].style.backgroundColor = '#d79921';
                await timeout(delay);
                swap(array, i, j);
                await timeout(delay);
                array[i].style.backgroundColor = '#383532';
                array[j].style.backgroundColor = '#383532';
                i++;
                j--;
            }
        }
        if (left < j) {
            await partition(array, left, j);
        }
        if (i < right) {
            await partition(array, i, right);
        }
    }
    await partition(array, 0, array.length - 1);
    return array;
}

export default quickSort;