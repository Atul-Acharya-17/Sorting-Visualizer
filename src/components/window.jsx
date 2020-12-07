import React, { Component } from 'react';
import Navbar from './navbar';
import Bars from './bars';
import { bubbleSort } from '../algorithms/bubbleSort';
import { selectionSort } from '../algorithms/selectionSort';
import { insertionSort } from '../algorithms/insertionSort';
import { mergeSort } from '../algorithms/mergeSort';
import { quickSort} from '../algorithms/quickSort';
import { heapSort } from '../algorithms/heapSort';
import { bucketSort } from '../algorithms/bucketSort';

const firstColor = "red";

const secondColor = "darkgoldenrod";

class Window extends Component {
    state = { 
        array : [],
        sort: true
     }
    render() { 
        return ( <div>
            <Navbar 
                onReset = {this.handleReset}
                onBubble = {this.handleBubble}
                onSelection = {this.handleSelection}
                onInsertion = {this.handleInsertion}
                onMerge = {this.handleMerge}
                onQuick = {this.handleQuick}
                onHeap = {this.handleHeap}
                onBucket = {this.handleBucket}
            ></Navbar>
            <Bars array = {this.state.array} ></Bars>
            </div> 
            );

    }

    componentDidMount() {
        this.handleReset();
    }

    handleReset = () => {
        const array = [];
        console.log("Reset");
        const min = 10;
        const max = 400;
        for (let i = 0; i < 250; ++i){
            array.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
        this.setState({array});
    }

    handleBubble = () => {
        console.log("Bubble sort");
        const animations = bubbleSort(this.state.array);
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animations.length; i++) {
            const [index1, index2, color, height1, height2] = animations[i];
            const barOneStyle = arrayBars[index1].style;
            const barTwoStyle = arrayBars[index2].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                if (color == secondColor) {
                    barOneStyle.height = `${height1}px`;
                    barTwoStyle.height = `${height2}px`;
                }
            }, i*1);
        }
    }

    handleSelection = () => {
        console.log("Selection sort");
        const arrayBars = document.getElementsByClassName('array-bar');
        const animations = selectionSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const [index1, index2, color, height1, height2] = animations[i];
            const barOneStyle = arrayBars[index1].style;
            const barTwoStyle = arrayBars[index2].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                if (color == secondColor) {
                    barOneStyle.height = `${height1}px`;
                    barTwoStyle.height = `${height2}px`;
                }
            }, i*20);
        }
    }

    handleInsertion = () => {
        console.log("Insertion sort");
        const animations = insertionSort(this.state.array);
        const arrayBars = document.getElementsByClassName('array-bar');

        for (let i = 0; i < animations.length; i++) {
            const [index1, index2, color, height1, height2] = animations[i];
            const barOneStyle = arrayBars[index1].style;
            const barTwoStyle = arrayBars[index2].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                if (color == secondColor) {
                    barOneStyle.height = `${height1}px`;
                    barTwoStyle.height = `${height2}px`;
                }
            }, i*1);
        }
        
    }

    handleMerge = () => {
        console.log("Merge sort");
        const animations = mergeSort(this.state.array);
        const arrayBars = document.getElementsByClassName('array-bar');

        for (let i = 0; i < animations.length; i++) {
            const [index1, index2, color, height1, height2] = animations[i];
            const barOneStyle = arrayBars[index1].style;
            const barTwoStyle = arrayBars[index2].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                if (color == secondColor) {
                    barOneStyle.height = `${height1}px`;
                }
            }, i*1);
        }
    }

    handleQuick = () => {
        console.log("Quick sort");
        const animations = quickSort(this.state.array);
        const arrayBars = document.getElementsByClassName('array-bar');

        for (let i = 0; i < animations.length; i++) {
            const [index1, index2, color, height1, height2] = animations[i];
            const barOneStyle = arrayBars[index1].style;
            const barTwoStyle = arrayBars[index2].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                if (color == secondColor) {
                    barOneStyle.height = `${height1}px`;
                    barTwoStyle.height = `${height2}px`;   
                }
            }, i*5);
        }
    }

    handleHeap = () => {
        console.log("Heap sort");
        const animations = heapSort(this.state.array);
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animations.length; i++) {
            const [index1, index2, color, height1, height2] = animations[i];
            const barOneStyle = arrayBars[index1].style;
            const barTwoStyle = arrayBars[index2].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                if (color == secondColor) {
                    barOneStyle.height = `${height1}px`;
                    barTwoStyle.height = `${height2}px`;   
                }
            }, i*5);
        }
    }

    handleBucket = () => {
        console.log("Bucket sort");
        const animations = bucketSort(this.state.array);
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animations.length; i++) {
            const [index1, index2, color, height1, height2] = animations[i];
            const barOneStyle = arrayBars[index1].style;
            const barTwoStyle = arrayBars[index2].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                if (color == secondColor) {
                    barOneStyle.height = `${height1}px`;
                    barTwoStyle.height = `${height2}px`;   
                }
            }, i*5);
        }
    }

}
 
export default Window;