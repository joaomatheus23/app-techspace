import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDOC1975f37VjZ3BsH1ewb-LMOxGSkLLAs",
  authDomain: "tech-space-16d71.firebaseapp.com",
  projectId: "tech-space-16d71",
  storageBucket: "tech-space-16d71.appspot.com",
  messagingSenderId: "300101248275",
  appId: "1:300101248275:web:b2fda10f3196f59bb726e6",
  measurementId: "G-EZBSN7XSNN"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, auth, storage };
