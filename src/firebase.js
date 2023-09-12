import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBsqwLYf4wDFvFUnWJh_oUT9ffSCNI84L8",
    authDomain: "nwitter-226ee.firebaseapp.com",
    projectId: "nwitter-226ee",
    storageBucket: "nwitter-226ee.appspot.com",
    messagingSenderId: "1059449994415",
    appId: "1:1059449994415:web:f79ef7dfe8b5f69e29285a"
  };

export default firebase.initializeApp(firebaseConfig);