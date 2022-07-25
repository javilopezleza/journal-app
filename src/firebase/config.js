// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIsCPNmXox8Km2oIvcmrcaZkWip0_HZ1c",
  authDomain: "react-curso-e9c89.firebaseapp.com",
  projectId: "react-curso-e9c89",
  storageBucket: "react-curso-e9c89.appspot.com",
  messagingSenderId: "387200326738",
  appId: "1:387200326738:web:745d57e83e59015167d38b"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );