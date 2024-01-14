import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage,ref  } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGRBR0yhouu7ZOBhUkU98FGUUQf3ixVfA",
  authDomain: "pet-website-2f3f5.firebaseapp.com",
  projectId: "pet-website-2f3f5",
  storageBucket: "pet-website-2f3f5.appspot.com",
  messagingSenderId: "816098304859",
  appId: "1:816098304859:web:f95aad30da4e42f664b07e",
  measurementId: "G-C886XX7782"
};

export default firebaseConfig;


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
