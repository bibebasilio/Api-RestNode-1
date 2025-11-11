// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// : Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,  //"AIzaSyC8rtZXN4OfUQBPVOH6pmoiB6pN-gHlh7w",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,    //     "api-rest-node-7cd3f.firebaseapp.com",
  projectId: process.env.FIREBASE_PROYECT_ID,  //"api-rest-node-7cd3f",
  storageBucket: process.env.FIREBASE_STRORAGE_BUCKET,   //"api-rest-node-7cd3f.firebasestorage.app",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,  // "457504115785",
  appId:process.env.FIREBASE_APP_ID,  // "1:457504115785:web:76ec685b195aa220228398"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initializa Firestore
const db = getFirestore(app);

export { db };