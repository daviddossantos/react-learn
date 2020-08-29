import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsLF3t9ekEb-wj6PT5tm3iZGD1PqjsLuM",
  authDomain: "fir-with-react-93a7a.firebaseapp.com",
  databaseURL: "https://fir-with-react-93a7a.firebaseio.com",
  projectId: "fir-with-react-93a7a",
  storageBucket: "fir-with-react-93a7a.appspot.com",
  messagingSenderId: "921636823703",
  appId: "1:921636823703:web:a4f8c7aeaede4fa9c6bfd2",
  measurementId: "G-4EL4YGC9BD",
};

firebase.initializeApp(firebaseConfig);
const language = firebase.auth();
export const auth = language;
export const firestore = firebase.firestore();
