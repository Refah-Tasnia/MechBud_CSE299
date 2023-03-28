import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBljeGStg03VMwT0IjoyxaGkMpwxycWmP4",
    authDomain: "fir-5a013.firebaseapp.com",
    projectId: "fir-5a013",
    storageBucket: "fir-5a013.appspot.com",
    messagingSenderId: "916628249079",
    appId: "1:916628249079:web:699e73d21afc33747936f2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);