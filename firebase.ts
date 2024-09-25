// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
// import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC35ooGI2aelpQxATW2ZPz6Yb30k0rsHdo",
  authDomain: "lokacraft-app.firebaseapp.com",
  projectId: "lokacraft-app",
  storageBucket: "lokacraft-app.appspot.com",
  messagingSenderId: "440209553251",
  appId: "1:440209553251:web:82def2928ed49a77c44556",
  measurementId: "G-1XHNLX6956"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
// const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app)

export { app, db, storage, auth }
