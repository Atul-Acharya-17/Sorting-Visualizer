import React, { Component } from 'react';
import './navbar.css'

class Navbar extends Component {
    constructor (props) {
        super(props);
    }
    render() { 
        return (
            <nav className="nav-bar">
                <form className="form-inline">
                    <button onClick = {this.props.onReset} className="btn btn-outline-primary m-4" type="button">Generate New Array</button>
                    <button onClick = {this.props.onBubble} className="btn btn-outline-success m-3" type="button">Bubble Sort</button>
                    <button onClick = {this.props.onSelection} className="btn btn-outline-success m-3" type="button">Selection Sort</button>
                    <button onClick = {this.props.onInsertion} className="btn btn-outline-success m-3" type="button">Insertion Sort</button>
                    <button onClick = {this.props.onMerge} className="btn btn-outline-success m-3" type="button">Merge Sort</button>
                    <button onClick = {this.props.onQuick} className="btn btn-outline-success m-3" type="button">Quick Sort</button>
                    <button onClick = {this.props.onHeap} className="btn btn-outline-success m-3" type="button">Heap Sort</button>
                    <button onClick = {this.props.onBucket} className="btn btn-outline-success m-3" type="button">Bucket Sort</button>
                </form>
            </nav>

        );
    }
}
 
export default Navbar;