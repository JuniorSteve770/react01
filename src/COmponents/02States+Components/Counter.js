import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props){
        super(props);
        this.state={
            count: 0
        };
    }

    handleIncrement=()=>{
       this.setState({
        count:this.state.count +1

       }) 
        // console.log("button have been cliked");
    };

    handleDecrement=()=>{
        this.setState({
         count:this.state.count -1
 
        }) 
         // console.log("button have been cliked");
     };

    render() {
        return (
        <div>
        <h3>here is a Counter that both Increment and Decrement</h3>
            <div>Count:{this.state.count} </div>
            <button onClick = {this.handleDecrement}>Decrement</button>
            <button onClick = {this.handleIncrement}>Increment</button>
            <br/>
        </div>
        )
    }
}
