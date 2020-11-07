import React,{Component} from 'react'

class Useprops extends Component {
    render() {
      return (
        <div>
            hello world fom Another Continent we Have!!. 
            <h1>{this.props.title} Among Best Continennts</h1>  
            <div>i am and int {this.props.myInt}</div>  
         <div>i am and Array of position {this.props.myArray[2]}</div> 
         <div>i am and Object {this.props.myObject.a}</div> 
         <div>i am a Function {this.props.myFunc(4,6)}</div>   

        </div>
      )  
    }
  }export default Useprops;
