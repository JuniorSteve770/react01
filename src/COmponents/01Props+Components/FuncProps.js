import React from 'react'

export default function FuncProps(props) {
    return (
        <div>
        <h1>Here!!! we see things Different</h1>
          <div>  Title {props.title}</div>
          <div> And int  {props.myInt}</div>
          <div>A function {props.myFunc(4,8)}</div>
          <div> And Array of Data {props.myArray[3]}</div>
          <div> And Object {props.myObject.a}</div>  
            
        </div>
    )
}

 export const FuncProps2 =(props)=> {
    return (
        <div>
          <h1>Here!!! we see things Different</h1>
          <div>  Title is a second sricpt from same component</div>
          <div> And int is a second sricpt from same component </div>
          <div>A function is a second sricpt from same component </div>
          <div> And Array of Data is a second sricpt from same component </div>
          <div> And Object is a second sricpt from same component </div>  
            
        </div>
    )
}
