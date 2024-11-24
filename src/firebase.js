import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDxDdKk9h55YbLd_EaRKEiV9eoi_lGf_vU",
  authDomain: "classchat-a68a5.firebaseapp.com",
  databaseURL: "https://classchat-a68a5-default-rtdb.firebaseio.com",
  projectId: "classchat-a68a5",
  storageBucket: "classchat-a68a5.firebasestorage.app",
  messagingSenderId: "407966196811",
  appId: "1:407966196811:web:2e10669c23862be62219ce",
  measurementId: "G-Y5S8XTJ1XQ"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
