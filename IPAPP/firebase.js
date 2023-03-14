import firebase from "firebase/app";
import "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  
  apiKey: "AIzaSyAHQbdNkbkef_QcUEdt1QpcIkyATHR-PEw",
  authDomain: "t2-project-c26f3.firebaseapp.com",
  projectId: "t2-project-c26f3",
  storageBucket: "t2-project-c26f3.appspot.com",
  messagingSenderId: "204751048350",
  appId: "1:204751048350:web:5fae0ec81a7e524404f58f"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

export {auth}
