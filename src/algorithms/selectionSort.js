const firstColor = "red";

const secondColor = "#f2aa4cff";

export function selectionSort(array){
    const animations = [];
    for (let i = 0; i < array.length; ++i) {
        let minPos = i;
        for (let j = i+1; j<array.length; ++j){
            if (array[j] < array[minPos]){
                minPos = j;
            }
        }
        let temp = array[i];
        array[i] = array[minPos];
        array[minPos] = temp;

        animations.push([i, minPos, firstColor, array[i], array[minPos]]);
        animations.push([i, minPos, secondColor, array[i], array[minPos]]);
    }
    return animations;
}