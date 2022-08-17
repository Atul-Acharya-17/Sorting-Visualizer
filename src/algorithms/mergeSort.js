const firstColor = "red";

const secondColor = "#f2aa4cff";

export function mergeSort(array){
    const animations = [];
    recursiveMerge(array, 0, array.length - 1, animations);
    return animations;
}

function recursiveMerge (array, start, end, animations) {
    if (start >= end) {
        return;
    }
    else{
        let mid = Math.floor((start + end) / 2);
        recursiveMerge(array, start, mid, animations );
        recursiveMerge(array, mid + 1, end, animations);

        let x = start;
        let y = mid + 1;
        while (x <= mid && y <= end){
            animations.push([x, y, firstColor, array[x], array[y]]);
            animations.push([x, y, secondColor, array[x], array[y]]);
            if (array[x] <= array[y]) {
                x++;
            }
            else if (array[x] > array[y]){
                let element = array[y];
                for (let i = y; i > x; i--){
                    array[i] = array[i-1];
                    animations.push([i, i-1, secondColor, array[i], array[i-1]]);
                }
                array[x] = element;
                animations.push([x, y, secondColor, array[x], array[y]]);
                x++;
                mid++;
                y++;
            }
        }   
        return;
    }
}