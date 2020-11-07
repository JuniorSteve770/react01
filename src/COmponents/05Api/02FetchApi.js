import React, { Component } from 'react';
import './02.css'

export default class AdvancedFech  extends Component {

    
    //api.randomuser.me
    // Here we fech data from API and return the data on our page

        state = {
            loading : true,
            person: [], //person represent d state variable(array) used to access in the API on line 18 below
        }
        
        async componentDidMount(){//the async is due to the fech request two line below
            const url ="https://api.randomuser.me/?results=4";//here we call the url from wich we will collect Data
            const response = await fetch(url);//here we use fech to issue request and have acces to data
            const data = await response.json();//await permit to make the fech request synchronus(request first and answer later) and ret5urn json
           this.setState({person:data.results , loading:false})//result is the array contained in the API from witch we extract data. we also set loading to false
    console.log(data);

        }

    render() { 

                    // {/* the line above permit us to print message according loading or if person variable is empty */}
             if(this.state.loading)  { 
                 return<div>Loading... It may be a Network issue...</div>
             };

    // {/* since the Variable person is not empty, and loading is set to false, here we load the Contain of array person that handle data from result  */}
             if(!this.state.person.length){
                return <div>didn't get a person to return</div>
             };
        
        return (
            <div>
                <h2>API... for (3) person</h2>
                <br/>  
   
               <div className="header">
                    {/* here we insert the sythax that will help us display for 5 people */}
                    {/* map keyword permit us to person by person to fetch and display data */}
                    
                    {this.state.person.map((people, index)=>(
                        
                        <div key ={`people.login.uuid-${index}`} className="body">

                        

                            <div><strong>Title:</strong>{people.name.title}</div>
                            <div><strong>Name:</strong>{people.name.first}</div>
                            <div><strong>SurName:</strong>{people.name.last}</div>
                            <div><strong>Cell:</strong>{people.cell}</div>
                            <div><strong>City:</strong>{people.cityl}</div>
                            <div><strong>Country:</strong>{people.location.country}</div>
                            <div><strong>State:</strong>{people.location.state}</div>
                            <br/>
                            <img src={people.picture.large} alt='no contain to display'/>
                            <img src={people.picture.medium} alt='no contain to display'/>
                            <img src={people.picture.thumbnail} alt='no contain to display'/>
                            <br/><br/><br/>
                        </div>
                        
                    ))}
                
                </div>
                   
            </div>
        )
    }
}
  