// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA55mhzkgTGw_Xm4P_Dvq9sAvROAHUnb0",
  authDomain: "portfolio-ab2f6.firebaseapp.com",
  projectId: "portfolio-ab2f6",
  storageBucket: "portfolio-ab2f6.appspot.com",
  messagingSenderId: "293738040827",
  appId: "1:293738040827:web:b9dbcd972e5e40b84dcf5e",
  measurementId: "G-NJHTF70X68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
