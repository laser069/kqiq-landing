import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNryHW9tmdAfYbfGk8UQklhSfAC64rfp4",
  authDomain: "kwiqbill.firebaseapp.com",
  projectId: "kwiqbill",
  storageBucket: "kwiqbill.firebasestorage.app",
  messagingSenderId: "87669584204",
  appId: "1:87669584204:web:a3c310e5ac66cb0aff9fe9",
  measurementId: "G-TBK4T5Q3SF"
};

// Initialize Firebase (Prevents re-initializing during hot reloads in Next.js)
const app: FirebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Services
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);

// Analytics only runs in the browser
let analytics: Analytics | undefined;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, auth, db, analytics };