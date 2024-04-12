// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwQiClVE1BqmMg-cHlDkG7Xow55_p-1Ec",
  authDomain: "j-shop-vid.firebaseapp.com",
  projectId: "j-shop-vid",
  storageBucket: "j-shop-vid.appspot.com",
  messagingSenderId: "239069544561",
  appId: "1:239069544561:web:dabb1783afa10752fa5bd0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;