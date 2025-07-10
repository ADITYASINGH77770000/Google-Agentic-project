// lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCtc1BOBA57jqLfmsIANnotDDQnZ5MBpWQ",
  authDomain: "pulse-b9f69.firebaseapp.com",
  projectId: "pulse-b9f69",
  storageBucket: "pulse-b9f69.appspot.com",  // ✅ Fix the typo here (".com", not ".app")
  messagingSenderId: "444746554389",
  appId: "1:444746554389:web:27b00411b8e708662f421c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// ✅ Export the app instance
export { app as firebaseApp, auth, db, storage };
