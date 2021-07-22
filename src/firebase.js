import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAqRA2v8wcM6P_eWBYZD1Xjpm2qXJGK6Ns",
    authDomain: "parisaramwebsite.firebaseapp.com",
    databaseURL: "https://parisaramwebsite-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "parisaramwebsite",
    storageBucket: "parisaramwebsite.appspot.com",
    messagingSenderId: "98289557030",
    appId: "1:98289557030:web:338451364a8ae298d7d0e7"
  };

firebase.initializeApp(firebaseConfig);
export default firebase
