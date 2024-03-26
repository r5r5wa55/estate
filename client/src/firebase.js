// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "merm-estate.firebaseapp.com",
  projectId: "merm-estate",
  storageBucket: "merm-estate.appspot.com",
  messagingSenderId: "394328408368",
  appId: "1:394328408368:web:bd8148861cae1180e3c8f5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);