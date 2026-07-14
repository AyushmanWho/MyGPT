import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqw93Glkez_mTBqWbA33dvxSTO6IvzQ18",
  authDomain: "mygpt-a9b95.firebaseapp.com",
  projectId: "mygpt-a9b95",
  storageBucket: "mygpt-a9b95.firebasestorage.app",
  messagingSenderId: "195804213686",
  appId: "1:195804213686:web:5e4623a1d6ec74d1ab5117",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();