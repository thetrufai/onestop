import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyBDVUkUcqm8QYF-5WEGTn2ZbWm4cXKNTAI",
  authDomain: "site-35770.firebaseapp.com",
  projectId: "site-35770",
  storageBucket: "site-35770.appspot.com",
  messagingSenderId: "459517853276",
  appId: "1:459517853276:web:ef68f3c41910912d633099",
  measurementId: "G-RT5SLJ7FFC"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };