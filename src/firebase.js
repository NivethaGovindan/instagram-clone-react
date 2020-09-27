import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDr0UCs4WRZGAPoAdCLm2WtkJmHdHSMr44",
    authDomain: "instagram-clone-f3511.firebaseapp.com",
    databaseURL: "https://instagram-clone-f3511.firebaseio.com",
    projectId: "instagram-clone-f3511",
    storageBucket: "instagram-clone-f3511.appspot.com",
    messagingSenderId: "902508096844",
    appId: "1:902508096844:web:41e4552452668bffb633e9",
    measurementId: "G-64B5PWNJMH"
  });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage };