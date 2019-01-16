import firebase from "firebase";
import { FirebaseConfig } from "./FirebaseConfig";

firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const firebaseValue = databaseRef.child("value");

export const storage = firebase.storage(); //allow read, write: if request.auth != null;

export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
