/**
 * 
 * @param length number of elements in the array
 * @param min minimum value of the random number
 * @param max maximum value of the random number
 * @returns an array of random numbers
 */
const randomArray = (length: number, min: number, max: number): number[] => {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

export default randomArray;