const firstColor = "red";

const secondColor = "#f2aa4cff";


export function bucketSort(array){
    let max = 1;

    for (let i = 0; i < array.length; ++i){
        if (array[i] > max){
            max = array[i];
        }
    }
    
    const numberOfBuckets = Math.floor(Math.sqrt(array.length));


    /* The correct way to do it
    
    let buckets = [];

    for (let i = 0; i < numberOfBuckets; ++i){
        buckets.push([]);
    }

    for (let i = 0; i < array.length; ++i){
        let bucketNumber = Math.ceil((array[i] * numberOfBuckets) / max) - 1;
        buckets[bucketNumber].push(array[i]);
    }

    */

    let bucketIndexes = [];
    let pos = 0;

    let animations = [];

    for (let id = 0; id < numberOfBuckets; id++){
        bucketIndexes.push(pos);
        for (let i = 0; i < array.length; ++i){
            let bucketNumber = Math.ceil((array[i] * numberOfBuckets) / max) - 1;

            if (bucketNumber === id){
                let temp = array[i];
                array[i] = array[pos];
                array[pos] = temp;
                animations.push([pos, i, firstColor, array[pos], array[i]]);
                animations.push([pos, i, secondColor, array[pos], array[i]]);
                pos += 1;
            }
        }
    }

    bucketIndexes.push(array.length);
    
    for (let bucketId = 0; bucketId < bucketIndexes.length - 1; bucketId++){
        const start = bucketIndexes[bucketId];
        const end = bucketIndexes[bucketId + 1];

        for (let i = start + 1; i < end; ++i){
            for (let j = i; j >= start; --j){
                if (array[j-1] > array[j]) {
                    let temp = array[j];
                    array[j] = array[j-1];
                    array[j-1] = temp;
                    animations.push([j - 1, j, firstColor, array[j-1], array[j]]);
                    animations.push([j - 1, j, secondColor, array[j-1], array[j]]);
                }
                else{
                    break;
                }
            }
        }
    }

    return animations;

}