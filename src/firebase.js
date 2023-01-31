import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdj3o_c4Z4Yioe96y3_tPsUwVLPO4oCz8",
  authDomain: "linkedin-practical.firebaseapp.com",
  projectId: "linkedin-practical",
  storageBucket: "linkedin-practical.appspot.com",
  messagingSenderId: "800272514517",
  appId: "1:800272514517:web:f445b0a4256ae8d3a9915c",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };
