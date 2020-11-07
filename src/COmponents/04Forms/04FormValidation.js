import React, { Component } from 'react'

const initialState = {
    name:"",  
    surname:"",
    password:"",     
    email:"",  
    genDer:"Miss",                
    
};

export default class componentName extends Component {
    state = initialState  ;

    //Here we create All the functions that will be called by buttons, ones triggered
    //we just pass fieldnames like Props(input parameters)

    HandleChanges = event =>{//this function takes in all events and determine what5 t5o do according to event name/type
        //from the inputs above, the state will be updated depending on the trigged parameter(checbox or form input fields) 
        const  Ischeckbox = event.target.type ==="checkbox";
        this.setState({[event.target.name] : Ischeckbox? event.target.checked : event.target.value});

    }; 
    //here is functin that define and check if a form is valid or not
    validate = ()=>{

         //Here below, we insert Error Variables and define Data 

        let nameError = "";
        let surnameError = "";
        let passwordError = "";
        let emailError = "";
       

        //here are condition on form's each field
        
        if(!this.state.name){
            nameError = "name cannot be blank";
        }
        if(!this.state.surname){
            surnameError = "Surname cannot be blank";
        }
        if(!this.state.password ){
            passwordError = "Password is empty, type data";
        }

        if(!this.state.email.includes("@")){
            emailError ="invalid email, check well the fiels";
        }

        if(nameError|| surnameError|| passwordError||emailError ){
            this.setState({emailError, nameError, surnameError, passwordError})
            return false;
        };
        return true

    }
    //here is the funtion for form submission
    formSubmit = (e) => {
        e.preventDefault();        
        const isValid = this.validate(); //here we validate Data or not
        if(isValid) {
            console.log(this.state);

            //here we clear the form after loading Data
            this.setState(initialState);
        }
        
    };

    render() {
        return (
            <div>
                    <h2>Here is and Optimised form, Using a single Function to Handle All Users Activities...</h2>
             
            <form  onSubmit = {this.formSubmit}>
                <input  
                    placeholder = "please enter your Name"
                    name = "name"                    
                    value={this.state.name}//here we read the Default value of the variable inside state
                    onChange={this.HandleChanges}//here we create and event and parameter(name) each time input is triggered
                />
             
                    <div style={{ fontSize:10 , color:"red"}}>
                        {this.state.nameError}
                    </div>
                
                <br/>
                <input  
                    placeholder = "please enter your Surname"
                    name = "surname"
                    value={this.state.surname}//here we read the Default value of the variable inside state
                    onChange={this.HandleChanges}//here we create and event and parameter(name2) each time input is triggered
                />
                    <div style={{ fontSize:10 , color:"red"}}>
                        {this.state.surnameError}
                    </div>                
                <br/>
                <input  
                    placeholder = "please enter your email"
                    name = "email"
                    // type = "email"
                    value={this.state.email}//here we read the Default value of the variable inside state
                    onChange={this.HandleChanges}//here we create and event and parameter(name2) each time input is triggered
                />
                <div style={{ fontSize:10 , color:"red"}}>
                        {this.state.emailError}
                    </div>                
                <br/>
                <input
                placeholder = "password"
                    name = "password"
                    type = "password"
                    checked = {this.state.password}
                    onChange = {this.HandleChanges}
                />
                <div style={{ fontSize:10 , color:"red"}}>
                        {this.state.passwordError}
                    </div>                
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
                <br/><br/>

                

                <button  type="submit">Submit
                    <i class="material-icons right">send</i>
                </button>
                    
            </form>
       
            
            </div>
            

        )
    }
}
