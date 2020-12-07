const firstColor = "red";

const secondColor = "darkgoldenrod";

export function heapSort(array) {
    let animations = []

    let heap = createHeap(array, animations);

    let slot = heap.length - 1;


    while (slot > 0){
        let temp = heap[0];
        console.log(temp);
        heap[0] = heap[slot];
        heap[slot] = temp;
        animations.push([0, slot, firstColor, array[0], heap[slot]]);
        animations.push([0, slot, secondColor, array[0], heap[slot]]);
        slot--;
        heapify(heap, 0, slot + 1, animations);
    }
    return animations;
}

function createHeap(array, animations) {
    for (let i = array.length - 1; i >= 0; --i){
        array = heapify(array, i, array.length, animations)
    }
    return array;
}

function heapify(heap, k, limit, animations) {
    k = k+1  // Heap indexes start from 1

    if (2*k > limit) {
        return heap;
    }

    const leftChild = 2*k - 1;
    const rightChild = 2*k;
    if (rightChild + 1 > limit) {
        if (heap[k- 1] < heap[leftChild]) {
            let temp = heap[k - 1];
            heap[k - 1] = heap[leftChild];
            heap[leftChild] = temp;
            animations.push([k-1, leftChild, firstColor, heap[k-1], heap[leftChild]]);
            animations.push([k-1, leftChild, secondColor, heap[k-1], heap[leftChild]]);
            heapify(heap, leftChild, limit, animations);
        }
        return heap;
    }

    const largerChild = heap[leftChild] > heap[rightChild] ? leftChild : rightChild;

    if (heap[k - 1] < heap[largerChild]) {
        let temp = heap[k - 1];
        heap[k - 1] = heap[largerChild];
        heap[largerChild] = temp;

        animations.push([k-1, largerChild, firstColor, heap[k-1], heap[largerChild]]);
        animations.push([k-1, largerChild, secondColor, heap[k-1], heap[largerChild]]);
        heapify(heap, largerChild, limit, animations);
    }

    return heap;

}