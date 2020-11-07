import React, { Component } from 'react'

export default class FormTags extends Component {
    state = {
        name:"ben",  
        name2:"",      
        rememBerMe:false,       
        genDer:"Miss",

    };
    //Here we create All the functions that will be called by buttons, ones triggered

    HandleChanges = (event, fieldName, Ischeckbox) =>{//this function takes and event and two parameters(fields ou inputs)
        //from the inputs above, the state will be updated depending on the trigged parameter(checbox or form input fields) 
        this.setState({[fieldName] : Ischeckbox? event.target.checked : event.target.value});

    }; 
    //here is the function for form submition
    formSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state);

    };
    render() {
        return (
            <div>
                    <h2>Here is and Advanced form, Using a single Function to Handle All Users Activities...</h2>
            
            <form  onSubmit = {this.formSubmit}  >
                <input  
                    value={this.state.name}//here we read the Default value of the variable inside state
                    onChange={event=>this.HandleChanges(event, "name")}//here we create and event and parameter(name) each time input is triggered
                    style ={{width:500}}
                />
                <br/>
                <input  
                    value={this.state.name2}//here we read the Default value of the variable inside state
                    onChange={event=>this.HandleChanges(event, "name2")}//here we create and event and parameter(name2) each time input is triggered
                    style ={{width:500}}
                />
                <br/>
                <input type="checkbox"
                    checked={this.state.rememBerMe}
                    onChange={event => this.HandleChanges(event, "rememBerMe", true)}
                    style ={{width:500}}
                />
                <br/>
                <select value={this.state.genDer}
                        onChange={(event)=>this.HandleChanges(event, "genDer")}
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
