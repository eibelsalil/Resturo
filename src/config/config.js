import firebase from "firebase"

const  firebaseConfig = {
    apiKey: "AIzaSyBaFPESSuf2i-PF6TOa4wr-x4mmwIYpIio",
    authDomain: "resturo-07.firebaseapp.com",
    databaseURL: "https://resturo-07.firebaseio.com",
    projectId: "resturo-07",
    storageBucket: "resturo-07.appspot.com",
    messagingSenderId: "962492478425",
    appId: "1:962492478425:web:69c08a7b753ce581"
  };

  const fire = firebase.initializeApp(firebaseConfig)

  export default fire