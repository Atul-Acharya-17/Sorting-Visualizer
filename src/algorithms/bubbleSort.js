const firstColor = "red";

const secondColor = "#f2aa4cff";

export function bubbleSort(array){
    let comparisons = [];
    for (let i=0; i< array.length-1; ++i){
        for (let j=0; j< array.length - 1 - i; ++j){
            if (array[j] > array[j+1]){
                let temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
                comparisons.push([j, j+1, firstColor, array[j], array[j+1]]);
                comparisons.push([j, j+1, secondColor, array[j], array[j+1]]);
            }
        }
    }
    return comparisons
}