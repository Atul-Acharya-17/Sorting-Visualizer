const firstColor = "red";

const secondColor = "#f2aa4cff";

export function quickSort(array){
    const animations = [];
    recursiveSort(array, 0, array.length - 1, animations);
    return animations;

}

function recursiveSort(array, start, end, animations){
    if (start >= end) {
        return;
    }
    else {
        const pivotIndex = end;
        const pivot = array[pivotIndex];
        let smallestIndex = start;
        for(let i = start; i <= end; ++i){
            if (array[i] < pivot){
                let temp = array[smallestIndex];
                array[smallestIndex] = array[i];
                array[i] = temp;
                animations.push([i, smallestIndex, firstColor, array[i], array[smallestIndex]]);
                animations.push([i, smallestIndex, secondColor, array[i], array[smallestIndex]]);
                smallestIndex++;
            }
            else{
                animations.push([i, pivotIndex, firstColor, array[i], array[pivotIndex]]);
                animations.push([i, pivotIndex, secondColor, array[i], array[pivotIndex]]);
            }
        }

        array[pivotIndex] = array[smallestIndex];
        array[smallestIndex] = pivot;
        animations.push([pivotIndex, smallestIndex, firstColor, array[pivotIndex], array[smallestIndex]]);
        animations.push([pivotIndex, smallestIndex, secondColor, array[pivotIndex], array[smallestIndex]]);

        recursiveSort(array, start, smallestIndex-1, animations);
        recursiveSort(array, smallestIndex+1, end, animations);
    }
    return;
}