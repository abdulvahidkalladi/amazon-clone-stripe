import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {
  collection,
  getDocs,
  doc,
  addDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9-OAbmE6Nwmc-dTQQSHKEZJ332TWNXC0",
  authDomain: "clone-f73ab.firebaseapp.com",
  projectId: "clone-f73ab",
  storageBucket: "clone-f73ab.appspot.com",
  messagingSenderId: "980808279572",
  appId: "1:980808279572:web:33f0a1588440143259e901",
  measurementId: "G-1Y3QKC8VX8",
};
const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
const db = getFirestore();
const colRef = collection(db, "Users");
getDocs(colRef).then((snapshot) => {
  console.log(snapshot.docs);
});

// const db = firebase.firestore();
const auth = getAuth(firebaseApp);

export { colRef, getDocs, db, collection, auth, firebaseApp };
