import React ,{ Component }from 'react';
//import logo from './logo.svg';
import './App.css';
//import Landing from './COmponents/Landing';
import FunctProps,{FuncProps2} from './COmponents/01Props+Components/FuncProps';
import ClassProps from './COmponents/01Props+Components/ClassProps';
import Counter from './COmponents/02States+Components/Counter';
// import ImageSlide from './COmponents/03States++/ImageSlider';
import SlideImages from './COmponents/03States++/ImageSlider';
import Myform from './COmponents/04Forms/01MyForm';
import Formtag from './COmponents/04Forms/02Form_tag';
import AdvcedFormtag from './COmponents/04Forms/03Form_tags';
import SecondAdvcedFormtag from './COmponents/04Forms/04FormValidation';
import FetchApi from './COmponents/05Api/01FetchApi';
import AdvancedFetch from './COmponents/05Api/02FetchApi';
//import Login from './COmponents/00Firebase/Login';



//  here is the class Componnent
 class Header extends Component {
   render() {
     
     return (
       <div>
         hello world !!. we have two Continent to Explore
         <h1>i am Intitulated {this.props.title}</h1>   
         <div>i am and int {this.props.myInt}</div>  
         <div>i am and Array of position {this.props.myArray[2]}</div> 
         <div>i am and Object {this.props.myObject.a}</div>  
         <div>i am a Function {this.props.myFunc(5,7)}</div>     
       </div>
     )  
   }
 }
//  End of the Class Component

// Here is the Main Component
function App() {
  const add = (a, b) =>  a+b;
  return (
    <div className="App">
    <br/>
   {/* // <Login/> */}

    <br/>
    <Header title={"Continent Africa"} 
        myInt = {4} 
        myFunc = {add} 
        myArray = {[1, 2, 3, 4]}
        myObject = {{ a:5, b:6}}
    />

    <ClassProps 
            title="lion from Europe"
            myInt = {5} 
            myFunc = {add} 
            myArray = {[1, 4, 6, 9]}
            myObject = {{ a:7, b:9}}
    />

    <FunctProps title="Welcome to the Functionnal Component.."
            myInt = {5} 
            myFunc = {add} 
            myArray = {[1, 4, 6, 9]}
            myObject = {{ a:7, b:9}}
    />
   
   {/*  Here i'm printing a second sricpt from same component */}
      <FuncProps2/>
      <br/>
      <Counter/>
      <br/>
      <SlideImages/>
      <br/>
      <Myform/>
      <br/>
      <Formtag/>
      <br/>
      <AdvcedFormtag/>
      <br/>
      <SecondAdvcedFormtag/>
      <br/>
      <FetchApi/>
      <br/>
      <AdvancedFetch/>

    </div> 
  );
}

export default App;
