import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC1fyviatBpkBSBQMcd6ocOrN8S5AcpNkM",
  authDomain: "fir-crud-790c9.firebaseapp.com",
  projectId: "fir-crud-790c9",
  storageBucket: "fir-crud-790c9.appspot.com",
  messagingSenderId: "608169910453",
  appId: "1:608169910453:web:6dce53b292212c788f9efc",

};

// Initialize Firebase

const app = initializeApp(firebaseConfig); 

export const db = getFirestore(app); 