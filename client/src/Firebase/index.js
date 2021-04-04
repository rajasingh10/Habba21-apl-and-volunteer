
import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC4M-xWHq9tosxSIRBJc9bJD7KqX2LO4GM",
    authDomain: "habba-21.firebaseapp.com",
    projectId: "habba-21",
    storageBucket: "habba-21.appspot.com",
    messagingSenderId: "949761481347",
    appId: "1:949761481347:web:d4117adf4e2fa6ab4b99b6",
    measurementId: "G-JN5H29NDTS"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };