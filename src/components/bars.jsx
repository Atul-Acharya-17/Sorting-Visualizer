import React, { Component } from 'react';
import './bars.css';

class Bars extends Component {
    constructor (props) {
        super(props);
    }
    render() { 
        return (
            <div className="array-container">
                {this.props.array.map((value, idx) =>
                (<div className="array-bar" key={idx} style = {{height:`${value}px`}}>
                  </div>  ))}
            </div> );
    }
}
 
export default Bars;