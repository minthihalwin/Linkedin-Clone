import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVWE-30bw8CJQ76y7AdnaaqA1HqHi5lzM",
  authDomain: "linkedin-clone-80e5a.firebaseapp.com",
  projectId: "linkedin-clone-80e5a",
  storageBucket: "linkedin-clone-80e5a.appspot.com",
  messagingSenderId: "572597145535",
  appId: "1:572597145535:web:ddb2e7b4ed1276e8af9b0a",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };
