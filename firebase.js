import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMtcnGP2CWbFhjeazvBTuKQH_Xif2znUg",
  authDomain: "mechbud-bf58e.firebaseapp.com",
  projectId: "mechbud-bf58e",
  storageBucket: "mechbud-bf58e.appspot.com",
  messagingSenderId: "382416102627",
  appId: "1:382416102627:web:bdb4d7634c11952b3ad1d6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
