import React, { Component } from 'react'

export default class FetchApi extends Component {

    
    //api.randomuser.me
    // Here we fech data from API and return the data on our page

        state = {
            loading : true,
            person: null, //person represent d state variable(array) used to access in the API on line 18 below
        }
        
        async componentDidMount(){//the async is due to the fech request two line below
            const url ="https://api.randomuser.me/";//here we call the url from wich we will collect Data
            const response = await fetch(url);//here we use fech to issue request and have acces to data
            const data = await response.json();//await permit to make the fech request synchronus(request first and answer later) and ret5urn json
           this.setState({person:data.results[0], loading:false})//result is the array contained in the API from witch we extract data. we also set loading to false
    //console.log(data);

        }

    render() {       
        return (
            <div>
                <h2>Here we dill with API... Using fetch funtion</h2>
                <br/>  
        {/* the line above permit us to print message according loading or if person variable is empty */}
        {/* since the Variable person is not empty, and loading is set to false, here we load the Contain of array person that handle data from result  */}
                {this.state.loading || !this.state.person ? 
                    (
                        <div> loading...or Network issue</div>  
                    ):
                    ( <div className="image">

                        <div><strong>Title: </strong>{this.state.person.name.title}</div>
                        <div><strong>Name: </strong>{this.state.person.name.first}</div>
                        <div><strong>SurName: </strong>{this.state.person.name.last}</div>
                        <div><strong>Cell: </strong>{this.state.person.cell}</div>
                        <div><strong>e-Mail: </strong>{this.state.person.email}</div>
                        <div><strong>Country: </strong>{this.state.person.location.country}</div>
                        <div><strong>State: </strong>{this.state.person.location.state}</div>
                        <br/>
                        <img src={this.state.person.picture.large} alt='no contain to display'/>
                        <img src={this.state.person.picture.medium }  alt='no contain to display'/>
                        <img src={this.state.person.picture.thumbnail}  alt='no contain to display'/>
                      </div>
                    )
                }
        
            </div>
        )
    }
}
  