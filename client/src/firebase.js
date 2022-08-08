import firebase from "firebase/compat/app";
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAuEwmQoR21Jx2tPJoThCu_L41MzX-gyg4",
  authDomain: "aelaphdejenconvention.firebaseapp.com",
  projectId: "aelaphdejenconvention",
  storageBucket: "aelaphdejenconvention.appspot.com",
  messagingSenderId: "358815686855",
  appId: "1:358815686855:web:887914e58add8525fcdee2",
  measurementId: "G-50C6H2ZS4Z"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage(app);

export default storage;