import React, { Component } from 'react'

export default class SlideImages extends Component {
    
        state={

            images: [
                "https://www.gettyimages.fr/gi-resources/images/500px/983794168.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9J0grWUOxCg1YMsKq7ildPLsBHVPiODBjtQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkERtGIa0EV08ECFNn_Gzv9QaW4to-lU-AYA&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwzUzEZksd0ziSj40Ly_mnEOtichB36iSPng&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqEawppcajgogI_MffHsfqoWBidTQ4jmOBeQ&usqp=CAU",
            ],
                // Here we create and Index that will help Us track The Image
            Index:1,

            visible:true,


        };

        // Here i create the Function that will increment Index 
            // and make me moove from and Image to another 

        NextImage = () => {
            this.setState({
                Index : this.state.Index +1
            });
        };

        // Here i create the Function that will Decrement Index 
            // and make me moove from and Image to another 

        PrevImage = ()=>{
            this.setState({
                Index:this.state.Index -1

            });
        };

        // Herev is the Function we use to show/Hide Images
        // and rerender the State 
        HideImg =()=>{
            this.setState({visible:!this.state.visible});
        };


        render() {
            // here we condition the message on the button 
            // according to the State(hiden or Not) of the Button
            const buttonText = this.state.visible? 'Hide': 'Show'
        return (
            <div>
            <br/>
            <h3>here is Image Slider</h3>
            { this.state.visible? 
                    <img 
                        style ={{width:400, height:250}}
                        src={this.state.images[this.state.Index]} 
                        alt="no beauty for the Moment"
                    />:
                    
                    <div>The Beauty Have Been hiden</div> }
            <br/><br/>
            <button onClick={this.PrevImage}>Prev</button>
            <button onClick={this.NextImage}>Next</button>  
            <br/>
            <button onClick={this.HideImg}>{buttonText}</button>          
            </div>
        )
    }
}
