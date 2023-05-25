// import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC1fyviatBpkBSBQMcd6ocOrN8S5AcpNkM",
  authDomain: "fir-crud-790c9.firebaseapp.com",
  projectId: "fir-crud-790c9",
  storageBucket: "fir-crud-790c9.appspot.com",
  messagingSenderId: "608169910453",
  appId: "1:608169910453:web:6dce53b292212c788f9efc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app.database().ref(); 