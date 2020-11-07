import React, { Component } from 'react'

export default class Myform extends Component {
    state={
        name:" Percys ",
        rememBerMe:false,
        title:'Miss',
    };
    // here is the function that's called when form is triggered
    FormChanged = event=> {
        this.setState({name:event.target.value})
    };
    //here is the function that listen to the checkBox
    handleChek = event => {
        this.setState({
            rememberMe:event.target.checked
        })
    };
    //here is the function that listen to the Select
    hanDleSelect = event =>{
        this.setState({
            title:event.target.value
         });
    };
    //here is where we Submit our Form
    FormSubmit = ()=>{
        console.log(this.state)
    }

    
    render() {
        return (
            <div>
            <h2>Here is a Basic Form....Provide Us with your credentials...</h2>
            <form>
                <input 
                    style ={{width:500}}
                    type='text' 
                    value={this.state.name}//here, we print a default name
                    onChange={this.FormChanged}//here we collect and display new Name entered by the User
                />
                <br/>
                <input type="checkbox"
                       checked={this.state.rememberMe}
                       onChange={this.handleChek}//here we collect and display new Name entered by the User
                />
                
                <input 
                 style ={{width:500}}
                    type='text' 
                    value={this.state.name}//here, we print a default name
                    onChange={this.FormChanged}//here we collect and display new Name entered by the User
                />
                <div>
                    <select value = {this.state.title}
                            onChange = {this.hanDleSelect}
                    >
                    <option>Mr.</option>
                    <option>Ms.</option>
                    <option>Miss</option>
                    <option>Any</option>
                    </select> 
                </div>                
            </form>
            <br/>
            <button onClick={this.FormSubmit}>Submit</button>
            </div>
        )
    }
}
