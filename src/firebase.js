import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCUIGuTz2vVJsE5C0s0SJeL_4V8sxP62PU",
  authDomain: "twitterclone-8a24b.firebaseapp.com",
  projectId: "twitterclone-8a24b",
  storageBucket: "twitterclone-8a24b.appspot.com",
  messagingSenderId: "865738275550",
  appId: "1:865738275550:web:2dce7c4a5fe599f2ece04f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
