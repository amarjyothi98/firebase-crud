// import firebase from 'firebase/compat/app'
// import 'firebase/compat/database'
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC1fyviatBpkBSBQMcd6ocOrN8S5AcpNkM",
  authDomain: "fir-crud-790c9.firebaseapp.com",
  projectId: "fir-crud-790c9",
  storageBucket: "fir-crud-790c9.appspot.com",
  messagingSenderId: "608169910453",
  appId: "1:608169910453:web:6dce53b292212c788f9efc",

  databaseURL: "https://fir-crud-790c9-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app); 
export default database; 