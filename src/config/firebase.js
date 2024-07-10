// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFj-96Ifwtqw-4C0bdXmTht5Sl9_eXdhE",
    authDomain: "green-shop-b5328.firebaseapp.com",
    projectId: "green-shop-b5328",
    storageBucket: "green-shop-b5328.appspot.com",
    messagingSenderId: "382357134308",
    appId: "1:382357134308:web:c22ae0a9695d706b1245f1",
    measurementId: "G-HGK6LSZYK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
