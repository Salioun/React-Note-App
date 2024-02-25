
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3i91Jrr6Hvf3thR8G2txoQ79DJ8BJCY0",
  authDomain: "scrimba-note-app-8b970.firebaseapp.com",
  projectId: "scrimba-note-app-8b970",
  storageBucket: "scrimba-note-app-8b970.appspot.com",
  messagingSenderId: "451438154258",
  appId: "1:451438154258:web:12660d0567527ed0c97ecb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")