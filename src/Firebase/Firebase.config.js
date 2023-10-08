// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFY1i3ImpIgcagIuGkBPXUnF7l4hLy4P8",
    authDomain: "corporation-event.firebaseapp.com",
    projectId: "corporation-event",
    storageBucket: "corporation-event.appspot.com",
    messagingSenderId: "597015622415",
    appId: "1:597015622415:web:6b5f1461b54d0ff0ff447a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth