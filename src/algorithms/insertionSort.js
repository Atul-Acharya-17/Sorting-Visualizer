const firstColor = "red";

const secondColor = "darkgoldenrod";

export function insertionSort(array){

    const animations = [];

    for (let i=1; i<array.length; ++i){
        for (let j=i; j>=0; --j){
            if (array[j-1] > array[j]) {
                let temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
                animations.push([j-1, j, firstColor, array[j-1], array[j]]);
                animations.push([j-1, j, secondColor, array[j-1], array[j]]);
            }
            else{
                break;
            }
        }
    }
    return animations;
}