import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBTa9deeSTxfJAobeinh1dNm7QwVPm1khE",
    authDomain: "flowplus-77.firebaseapp.com",
    databaseURL: "https://flowplus-77.firebaseio.com",
    projectId: "flowplus-77",
    storageBucket: "",
    messagingSenderId: "864432949357",
    appId: "1:864432949357:web:d6c31632af199be5"
  };

    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     
  //    //added this morning
  //    const db = firebase.firestore();
  //    //db.settings({timestampsInSnapshot: true});
    
  //    //Add data(names) to firebase
  //   const form = document.querySelector('#adduserReg');
  //   //saving data using submit event
  //   form.addEventListener('submit', (e)=>{
  //   e.preventDefault();
  //   db.collection('UserDatas').add({
  //     Usname:form.fname.value,
  //     Lsname:form.lname.value,
  //   })      
  // })
     

     export default firebase;

    
  
 
  
  