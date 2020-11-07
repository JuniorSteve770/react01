import React, { Component } from 'react'

export default class FormTag2 extends Component {
    // Here we place and additional feature that ameliorate our functions 

    state = {
        name:"ben",  
        name2:"",      
        rememBerMe:false,       
        genDer:"Miss",

    };
    //Here we create All the functions that will be called by buttons, ones triggered
    //we just pass fieldnames like Props(input parameters)

    HandleChanges = event =>{//this function takes in all events and determine what5 t5o do according to event name/type
        //from the inputs above, the state will be updated depending on the trigged parameter(checbox or form input fields) 
        const  Ischeckbox = event.target.type ==="checkbox";
        this.setState({[event.target.name] : Ischeckbox? event.target.checked : event.target.value});

    }; 
    //here is the funtion for form submission
    formSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <div>

                    <h2>Here is a and Advanced form, Using a single Function to Handle All Users Activities...</h2>
             
            <form  onSubmit = {this.formSubmit}>
                <input  
                    name = "name"
                    value={this.state.name}//here we read the Default value of the variable inside state
                    onChange={this.HandleChanges}//here we create and event and parameter(name) each time input is triggered
                />
                <br/>
                <input  
                    name = "name2"
                    value={this.state.name2}//here we read the Default value of the variable inside state
                    onChange={this.HandleChanges}//here we create and event and parameter(name2) each time input is triggered
                />
                <br/>
                <input
                    name = "rememBerMe"
                    type = "checkbox"
                    checked = {this.state.rememBerMe}
                    onChange = {this.HandleChanges}
                />
                <br/>
                <select 
                        name = "genDer"
                        value={this.state.genDer}
                        onChange={this.HandleChanges}
                >
                    <option>M.</option>
                    <option>Miss.</option>
                    <option>Sir</option>
                    <option>Mme.</option>
                </select>
                <br/>

                <button type="submit">SuBmit</button>
            </form>
            

            </div>
        )
    }
}
