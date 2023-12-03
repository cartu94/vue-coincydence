// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtUGQ7w8ll1J7edCABQ7FSZmj83jrnw5Q",
  authDomain: "vue-coincydence.firebaseapp.com",
  projectId: "vue-coincydence",
  storageBucket: "vue-coincydence.appspot.com",
  messagingSenderId: "409145775684",
  appId: "1:409145775684:web:7c9a574ae4b0e077cb0e11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore and Collection
const db = getFirestore(app);
export const collectionRef = collection(db, 'vue-coincydence');

// Get Authentication
export const auth = getAuth(app);

export default app;