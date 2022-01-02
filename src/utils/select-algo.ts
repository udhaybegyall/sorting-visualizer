import BubbleSort from "./algorithms/bubble-sort";
import SelectionSort from "./algorithms/selection-sort";
import QuickSort from "./algorithms/quick-sort";
import InsertionSort from "./algorithms/insertion-sort";
import MergeSort from "./algorithms/merge-sort";

const SelectAlgo = (array: any[], algo: String, delay: number) => {

    switch (algo) {
        case 'Bubble sort':
            return BubbleSort(array, delay);
        case 'Selection sort':
            return SelectionSort(array, delay);
        case 'Insertion sort':
            return InsertionSort(array, delay);
        case 'Quick sort':
            return QuickSort(array, delay);
        case 'Merge sort':
            return MergeSort(array, delay);
        default:
            return window.alert('Select an algorithm first');
    }
};

export default SelectAlgo;