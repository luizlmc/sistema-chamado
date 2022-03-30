import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB3bT7Rzab-eCMZHoZCaCYl98A0J7_xyRA",
    authDomain: "sistema-7af65.firebaseapp.com",
    projectId: "sistema-7af65",
    storageBucket: "sistema-7af65.appspot.com",
    messagingSenderId: "594800083500",
    appId: "1:594800083500:web:36a9c97b5873ee53414789",
    measurementId: "G-DZY1S6ZV8W"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;