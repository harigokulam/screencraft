// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZqEP9f05LL_nZ6c_NZTsjMspSUwp-4hs",
  authDomain: "screencraft-4cecb.firebaseapp.com",
  projectId: "screencraft-4cecb",
  storageBucket: "screencraft-4cecb.appspot.com",
  messagingSenderId: "843473745853",
  appId: "1:843473745853:web:33747e8e8befa70566c4d4",
  measurementId: "G-EW9LG7KKL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);