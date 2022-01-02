const swap = (array: any, i: number, j: number) => {
    [array[i].style.height, array[j].style.height] = [array[j].style.height, array[i].style.height];
}

export default swap;