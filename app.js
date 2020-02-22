import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
        apiKey:"AIzaSyCvxqo7FepeCDZhd6cp2pEGCzfmbxr0_DQ",
        authDomain: "notifite.firebaseapp.com",
        databaseURL: "https://notifite.firebaseio.com",
        projectId: "notifite",
        storageBucket: "notifite.appspot.com",
    // ...
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const firebaseAuth = firebase.firestore();

  console.log(firebaseAuth)