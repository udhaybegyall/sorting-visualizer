import timeout from "../timeout";

const mergeSort = async (array: any[], delay: number) => {
    const merge = async (array: any[], left: number, middle: number, right: number) => {
        const leftArray = array.slice(left, middle + 1);
        const rightArray = array.slice(middle + 1, right + 1);
        let i = 0;
        let j = 0;
        let k = left;
        while (i < leftArray.length && j < rightArray.length) {
            if (parseInt(leftArray[i].style.height.slice(0, -2)) < parseInt(rightArray[j].style.height.slice(0, -2))) {
                await timeout(delay);
                leftArray[i].style.backgroundColor = 'yellow';
                await timeout(delay);
                leftArray[i].style.backgroundColor = '#323234';
                array[k].style.height = leftArray[i];
                i++;
            } else {
                await timeout(delay);
                rightArray[j].style.backgroundColor = 'yellow';
                await timeout(delay);
                rightArray[j].style.backgroundColor = '#323234';
                array[k].style.height = rightArray[j];
                j++;
            }
            k++;
        }
        while (i < leftArray.length) {
            await timeout(delay);
            leftArray[i].style.backgroundColor = 'yellow';
            await timeout(delay);
            leftArray[i].style.backgroundColor = '#323234';
            array[k].style.height = leftArray[i];
            i++;
            k++;
        }
        while (j < rightArray.length) {
            await timeout(delay);
            rightArray[j].style.backgroundColor = 'yellow';
            await timeout(delay);
            rightArray[j].style.backgroundColor = '#323234';
            array[k].style.height = rightArray[j];
            j++;
            k++;
        }
    }
    const mergeSortHelper = async (array: any[], left: number, right: number) => {
        if (left < right) {
            const middle = Math.floor((left + right) / 2);
            await mergeSortHelper(array, left, middle);
            await mergeSortHelper(array, middle + 1, right);
            await merge(array, left, middle, right);
        }
    }
    await mergeSortHelper(array, 0, array.length - 1);
    return array;
}

export default mergeSort;